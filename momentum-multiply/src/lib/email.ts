import { Resend } from "resend";
import { logError } from "@/lib/logger";
import { ErrorSeverity } from "@/generated/prisma/enums";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS =
  process.env.RESEND_FROM_ADDRESS || "Momentum Multiply <noreply@momentum-multiply.co.za>";

export async function sendEmail({
  to,
  subject,
  react,
}: {
  to: string;
  subject: string;
  react: JSX.Element;
}) {
  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject,
    react,
  });

  if (error) {
    logError({
      message: `Email send failed: ${error.message}`,
      context: "email.send",
      severity: ErrorSeverity.HIGH,
      metadata: { to, subject },
    });
    throw new Error(`Email send failed: ${error.message}`);
  }

  return data;
}
