import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import FutureSelfReminderEmail from "@/emails/future-self-reminder";
import { LetterDeliveryStatus } from "@/generated/prisma/enums";
import { logError } from "@/lib/logger";
import { ErrorSeverity } from "@/generated/prisma/enums";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const prisma = getPrisma();
    const now = new Date();

    const pendingLetters = await prisma.futureSelfLetter.findMany({
      where: {
        deliveryStatus: LetterDeliveryStatus.PENDING,
        scheduledDeliveryDate: { lte: now },
      },
    });

    let delivered = 0;
    let failed = 0;

    for (const letter of pendingLetters) {
      try {
        await sendEmail({
          to: letter.email,
          subject: "Your Future Self Is Checking In",
          react: FutureSelfReminderEmail({
            name: letter.name,
            imageUrl: letter.imageUploadUrl,
          }),
        });

        await prisma.futureSelfLetter.update({
          where: { id: letter.id },
          data: {
            deliveryStatus: LetterDeliveryStatus.DELIVERED,
            deliveredAt: now,
          },
        });

        delivered++;
      } catch (emailError) {
        logError({
          message: `Failed to deliver future self letter ${letter.id}`,
          context: "deliver-letters",
          severity: ErrorSeverity.HIGH,
          stack: emailError instanceof Error ? emailError.stack : undefined,
          metadata: { letterId: letter.id, email: letter.email },
        });

        await prisma.futureSelfLetter.update({
          where: { id: letter.id },
          data: { deliveryStatus: LetterDeliveryStatus.FAILED },
        });

        failed++;
      }
    }

    return NextResponse.json({
      total: pendingLetters.length,
      delivered,
      failed,
    });
  } catch (error) {
    logError({
      message: error instanceof Error ? error.message : "Unknown error in deliver-letters",
      context: "deliver-letters",
      severity: ErrorSeverity.HIGH,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
