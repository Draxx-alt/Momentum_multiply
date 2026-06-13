import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { logError } from "@/lib/logger";
import { ErrorSeverity } from "@/generated/prisma/enums";

export async function GET(request: Request) {
  try {
    const apiKey = request.headers.get("x-api-key");
    if (!apiKey || apiKey !== process.env.ORG_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 1000);
    const offset = Math.max(parseInt(searchParams.get("offset") || "0"), 0);

    const prisma = getPrisma();

    const where = email ? { email } : {};

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          email: true,
          name: true,
          multiplyMemberId: true,
          isMember: true,
          accountProvider: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
        take: limit,
        skip: offset,
        orderBy: { createdAt: "desc" },
      }),
      prisma.user.count({ where }),
    ]);

    return NextResponse.json({
      users,
      pagination: { total, limit, offset },
    });
  } catch (error) {
    logError({
      message: error instanceof Error ? error.message : "Unknown error in v1/users",
      context: "api.v1.users",
      severity: ErrorSeverity.HIGH,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
