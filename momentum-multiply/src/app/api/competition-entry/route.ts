import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { logError } from "@/lib/logger";
import CompetitionConfirmationEmail from "@/emails/competition-confirmation";
import { MemberStatus, CompetitionEntrySource, ConsentType, ErrorSeverity } from "@/generated/prisma/enums";

const MEMBER_STATUS_MAP: Record<string, MemberStatus> = {
  active: MemberStatus.ACTIVE_MULTIPLY_MEMBER,
  momentum: MemberStatus.MOMENTUM_MEMBER_NOT_MULTIPLY,
  none: MemberStatus.NON_MEMBER,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, mobileNumber, memberStatus, sessionId } =
      body;

    if (!firstName || !lastName || !email || !memberStatus) {
      return NextResponse.json(
        { error: "firstName, lastName, email, and memberStatus are required" },
        { status: 400 }
      );
    }

    const status = MEMBER_STATUS_MAP[memberStatus];
    if (!status) {
      return NextResponse.json(
        { error: `Invalid member status: ${memberStatus}` },
        { status: 400 }
      );
    }

    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "0.0.0.0";
    const userAgent = request.headers.get("user-agent") || null;
    const name = `${firstName} ${lastName}`;

    const prisma = getPrisma();

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
        sessionId: sessionId || undefined,
      },
      create: {
        email,
        name,
        sessionId,
      },
    });

    const existingConsents = await prisma.consent.findMany({
      where: { userId: user.id },
      select: { consentType: true },
    });

    const existingConsentTypes = new Set(
      existingConsents.map((c) => c.consentType)
    );

    const consentsToCreate: ConsentType[] = [];
    if (!existingConsentTypes.has(ConsentType.COMPETITION_ENTRY)) {
      consentsToCreate.push(ConsentType.COMPETITION_ENTRY);
    }
    if (!existingConsentTypes.has(ConsentType.DATA_PROCESSING)) {
      consentsToCreate.push(ConsentType.DATA_PROCESSING);
    }

    if (consentsToCreate.length > 0) {
      await prisma.consent.createMany({
        data: consentsToCreate.map((consentType) => ({
          userId: user.id,
          consentType,
          ipAddress,
          userAgent,
        })),
      });
    }

    const entry = await prisma.competitionEntry.create({
      data: {
        userId: user.id,
        email,
        name,
        mobileNumber: mobileNumber || null,
        memberStatus: status,
        source: CompetitionEntrySource.DIRECT,
      },
    });

    sendEmail({
      to: email,
      subject: "You're In! — Unlock Your Future Self Competition",
      react: CompetitionConfirmationEmail({ name }),
    }).catch((emailError) => {
      logError({
        message: "Failed to send confirmation email",
        context: "competition-entry.email",
        severity: ErrorSeverity.MEDIUM,
        stack: emailError instanceof Error ? emailError.stack : undefined,
        metadata: { email, name },
      });
    });

    return NextResponse.json(
      { id: entry.id, userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    logError({
      message: error instanceof Error ? error.message : "Unknown error in competition-entry",
      context: "competition-entry",
      severity: ErrorSeverity.HIGH,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
