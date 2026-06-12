import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { logError } from "@/lib/logger";
import { EmotionalState, ErrorSeverity } from "@/generated/prisma/enums";

const COMPONENT_ID_TO_ENUM: Record<string, EmotionalState> = {
  overwhelmed: EmotionalState.OVERWHELMED,
  "burnt-out": EmotionalState.BURNT_OUT,
  unmotivated: EmotionalState.UNMOTIVATED,
  stuck: EmotionalState.STUCK,
  anxious: EmotionalState.ANXIOUS,
  tired: EmotionalState.TIRED,
  disconnected: EmotionalState.DISCONNECTED,
  unfocused: EmotionalState.UNFOCUSED,
  lost: EmotionalState.LOST,
  ready: EmotionalState.READY_FOR_CHANGE,
  curious: EmotionalState.CURIOUS,
  hopeful: EmotionalState.HOPEFUL,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { emotionalStateId, sessionId, flippedToView, partnerRecommended } = body;

    if (!emotionalStateId) {
      return NextResponse.json(
        { error: "emotionalStateId is required" },
        { status: 400 }
      );
    }

    const state = COMPONENT_ID_TO_ENUM[emotionalStateId];
    if (!state) {
      return NextResponse.json(
        { error: `Invalid emotional state: ${emotionalStateId}` },
        { status: 400 }
      );
    }

    const prisma = getPrisma();

    const selection = await prisma.emotionalStateSelection.create({
      data: {
        emotionalState: state,
        sessionId: sessionId || null,
        flippedToView: flippedToView ?? false,
        partnerRecommended: partnerRecommended ?? null,
      },
    });

    return NextResponse.json({ id: selection.id }, { status: 201 });
  } catch (error) {
    logError({
      message: error instanceof Error ? error.message : "Unknown error in emotional-state",
      context: "emotional-state",
      severity: ErrorSeverity.MEDIUM,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
