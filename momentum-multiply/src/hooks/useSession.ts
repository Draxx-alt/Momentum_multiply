"use client";

import { useState, useEffect } from "react";

function getStoredSessionId(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("momentum_session_id");
}

function storeSessionId(id: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("momentum_session_id", id);
}

export function useSession(): string {
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    const existing = getStoredSessionId();
    if (existing) {
      setSessionId(existing);
    } else {
      const id = crypto.randomUUID();
      storeSessionId(id);
      setSessionId(id);
    }
  }, []);

  return sessionId;
}
