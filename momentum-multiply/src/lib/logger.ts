import { getPrisma } from "@/lib/prisma";
import { ErrorSeverity } from "@/generated/prisma/enums";
import type { InputJsonValue } from "@prisma/client/runtime/client";

interface LogErrorParams {
  message: string;
  context: string;
  severity?: ErrorSeverity;
  stack?: string;
  metadata?: Record<string, unknown>;
}

export async function logError({
  message,
  context,
  severity = ErrorSeverity.MEDIUM,
  stack,
  metadata,
}: LogErrorParams): Promise<void> {
  console.error(`[${context}] ${message}`, metadata ?? "");

  try {
    const prisma = getPrisma();
    await prisma.errorLog.create({
      data: {
        message,
        stack: stack ?? null,
        context,
        severity,
        metadata: metadata as InputJsonValue | undefined,
      },
    });
  } catch (dbError) {
    console.error(
      `[logger] Failed to persist error log to database:`,
      dbError
    );
  }
}
