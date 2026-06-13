import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { logError } from "@/lib/logger";
import { MemberStatus, ConsentType, ErrorSeverity } from "@/generated/prisma/enums";

const MEMBER_STATUS_MAP: Record<string, MemberStatus> = {
  active: MemberStatus.ACTIVE_MULTIPLY_MEMBER,
  momentum: MemberStatus.MOMENTUM_MEMBER_NOT_MULTIPLY,
  none: MemberStatus.NON_MEMBER,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, memberStatus, sessionId } = body;

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
        isMember: status === MemberStatus.ACTIVE_MULTIPLY_MEMBER || status === MemberStatus.MOMENTUM_MEMBER_NOT_MULTIPLY,
      },
      create: {
        email,
        name,
        sessionId,
        isMember: status === MemberStatus.ACTIVE_MULTIPLY_MEMBER || status === MemberStatus.MOMENTUM_MEMBER_NOT_MULTIPLY,
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
    if (!existingConsentTypes.has(ConsentType.DATA_PROCESSING)) {
      consentsToCreate.push(ConsentType.DATA_PROCESSING);
    }
    if (!existingConsentTypes.has(ConsentType.MARKETING_COMMUNICATIONS)) {
      consentsToCreate.push(ConsentType.MARKETING_COMMUNICATIONS);
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

    return NextResponse.json(
      { userId: user.id, name },
      { status: 201 }
    );
  } catch (error) {
    logError({
      message: error instanceof Error ? error.message : "Unknown error in join-multiply",
      context: "join-multiply",
      severity: ErrorSeverity.HIGH,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
