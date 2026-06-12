import { NextResponse } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { getPrisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import FutureSelfConfirmationEmail from "@/emails/future-self-confirmation";
import { ConsentType } from "@/generated/prisma/enums";
import { logError } from "@/lib/logger";
import { ErrorSeverity } from "@/generated/prisma/enums";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const UPLOAD_DIR = join(process.cwd(), "public", "uploads", "letters");

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const dateOfBirth = formData.get("dateOfBirth") as string;
    const email = formData.get("email") as string;
    const letterContent = (formData.get("letterContent") as string) || "";
    const image = formData.get("image") as File | null;
    const sessionId = (formData.get("sessionId") as string) || null;

    if (!name || !surname || !dateOfBirth || !email) {
      return NextResponse.json(
        { error: "name, surname, dateOfBirth, and email are required" },
        { status: 400 }
      );
    }

    let imageUploadUrl: string | null = null;
    if (image && image.size > 0) {
      if (image.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Image must be under 10MB" },
          { status: 400 }
        );
      }

      await mkdir(UPLOAD_DIR, { recursive: true });
      const ext = image.name.split(".").pop() || "jpg";
      const filename = `${Date.now()}-${crypto.randomUUID()}.${ext}`;
      const filepath = join(UPLOAD_DIR, filename);
      const buffer = Buffer.from(await image.arrayBuffer());
      await writeFile(filepath, buffer);
      imageUploadUrl = `/uploads/letters/${filename}`;
    }

    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "0.0.0.0";
    const userAgent = request.headers.get("user-agent") || null;
    const dob = new Date(dateOfBirth);
    const scheduledDeliveryDate = new Date();
    scheduledDeliveryDate.setDate(scheduledDeliveryDate.getDate() + 90);

    const prisma = getPrisma();

    const user = await prisma.user.upsert({
      where: { email },
      update: { name: `${name} ${surname}`, sessionId: sessionId || undefined },
      create: { email, name: `${name} ${surname}`, sessionId },
    });

    const existingConsents = await prisma.consent.findMany({
      where: { userId: user.id },
      select: { consentType: true },
    });
    const existingConsentTypes = new Set(
      existingConsents.map((c) => c.consentType)
    );

    const consentsToCreate: ConsentType[] = [];
    if (!existingConsentTypes.has(ConsentType.LETTER_DELIVERY)) {
      consentsToCreate.push(ConsentType.LETTER_DELIVERY);
    }
    if (!existingConsentTypes.has(ConsentType.DATA_PROCESSING)) {
      consentsToCreate.push(ConsentType.DATA_PROCESSING);
    }
    if (consentsToCreate.length > 0) {
      await prisma.consent.createMany({
        data: consentsToCreate.map((ct) => ({
          userId: user.id,
          consentType: ct,
          ipAddress,
          userAgent,
        })),
      });
    }

    const letter = await prisma.futureSelfLetter.create({
      data: {
        userId: user.id,
        name,
        surname,
        dateOfBirth: dob,
        email,
        letterContent,
        scheduledDeliveryDate,
        imageUploadUrl,
      },
    });

    sendEmail({
      to: email,
      subject: "Your Future Self Letter Has Been Received",
      react: FutureSelfConfirmationEmail({
        name,
        deliveryDate: scheduledDeliveryDate,
      }),
    }).catch((emailError) => {
      logError({
        message: "Failed to send future self letter confirmation email",
        context: "future-self-letter.confirmation-email",
        severity: ErrorSeverity.MEDIUM,
        stack: emailError instanceof Error ? emailError.stack : undefined,
        metadata: { email, letterId: letter.id },
      });
    });

    return NextResponse.json(
      { id: letter.id, scheduledDeliveryDate: scheduledDeliveryDate.toISOString() },
      { status: 201 }
    );
  } catch (error) {
    logError({
      message: error instanceof Error ? error.message : "Unknown error in future-self-letter",
      context: "future-self-letter",
      severity: ErrorSeverity.HIGH,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
