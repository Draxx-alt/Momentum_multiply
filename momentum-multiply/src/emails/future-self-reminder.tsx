import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Column,
  Row,
  Heading,
  Text,
  Link,
  Img,
  Hr,
} from "@react-email/components";

interface FutureSelfReminderEmailProps {
  name: string;
  imageUrl?: string | null;
}

const GOLD = "#D4A843";
const PURPLE = "#6D28D9";
const INDIGO = "#4F46E5";
const PURPLE_DARK = "#1E1B4B";
const WHITE = "#FFFFFF";
const TEXT_MUTED = "#9CA3AF";
const TEXT_BODY = "#374151";
const BORDER = "#E5E7EB";

export default function FutureSelfReminderEmail({
  name,
  imageUrl,
}: FutureSelfReminderEmailProps) {
  const firstName = name?.split(" ")[0] || "there";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return (
    <Html>
      <Head />
      <Preview>
        Your future self is checking in. 90 days ago, you wrote a letter. Today,
        it returns to you.
      </Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={headerStyle}>
            <Row>
              <Column align="center">
                <Text style={brandStyle}>MOMENTUM MULTIPLY</Text>
              </Column>
            </Row>
          </Section>

          <Section style={heroStyle}>
            <Heading style={heroTitleStyle}>
              Your Future Self Is{" "}
              <span style={{ color: GOLD }}>Checking In</span>
            </Heading>
            <Text style={heroSubtitleStyle}>
              A reminder from the version of you who chose growth
            </Text>
          </Section>

          <Section style={bodySectionStyle}>
            <Heading style={greetingStyle}>Hi {firstName},</Heading>

            <Text style={paragraphStyle}>
              Ninety days ago, you paused. You wrote a letter to yourself — your
              future self. Today, that letter returns, carrying the intentions,
              hopes, and promises you made.
            </Text>

            <Text style={paragraphStyle}>
              Take a moment to reflect on how far you&apos;ve come. The person
              who wrote those words has grown. The small choices you&apos;ve made
              every day since have shaped the person reading this now.
            </Text>

            {imageUrl && (
              <Section style={imageSectionStyle}>
                <Text style={imageLabelStyle}>
                  Your Letter — {new Date().getFullYear()}
                </Text>
                <Img
                  src={`${baseUrl}${imageUrl}`}
                  alt="Your future self letter"
                  style={imageStyle}
                />
              </Section>
            )}

            <Section style={quoteBoxStyle}>
              <Text style={quoteStyle}>
                &ldquo;The future you is created by what you do today.&rdquo;
              </Text>
            </Section>

            <Text style={paragraphStyle}>
              Wherever you are on your journey, know that growth is not linear.
              Keep showing up. Keep choosing yourself. Your future self is proud
              of you.
            </Text>
          </Section>

          <Hr style={hrStyle} />

          <Section style={footerStyle}>
            <Text style={footerBrandStyle}>Momentum Multiply</Text>
            <Text style={footerTextStyle}>
              Rewarding you for the small, positive choices you make every day.
            </Text>

            <Row style={footerLinksRowStyle}>
              <Column align="center">
                <Link href="#" style={footerLinkStyle}>
                  Privacy Policy
                </Link>
              </Column>
              <Column align="center">
                <Link href="#" style={footerLinkStyle}>
                  Terms &amp; Conditions
                </Link>
              </Column>
            </Row>

            <Text style={footerQuoteStyle}>
              &ldquo;Your future self is checking in.&rdquo;
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#F9FAFB",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "0",
  margin: "0",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  backgroundColor: WHITE,
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: PURPLE_DARK,
  padding: "24px 40px",
};

const brandStyle: React.CSSProperties = {
  color: WHITE,
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  margin: 0,
  textAlign: "center",
};

const heroStyle: React.CSSProperties = {
  background: `linear-gradient(135deg, ${PURPLE} 0%, ${INDIGO} 100%)`,
  padding: "48px 40px",
  textAlign: "center",
};

const heroTitleStyle: React.CSSProperties = {
  color: WHITE,
  fontSize: "36px",
  fontWeight: 800,
  margin: "0 0 8px",
  lineHeight: 1.1,
};

const heroSubtitleStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "16px",
  fontWeight: 400,
  margin: 0,
};

const bodySectionStyle: React.CSSProperties = {
  padding: "40px",
};

const greetingStyle: React.CSSProperties = {
  color: "#111827",
  fontSize: "22px",
  fontWeight: 700,
  margin: "0 0 20px",
};

const paragraphStyle: React.CSSProperties = {
  color: TEXT_BODY,
  fontSize: "15px",
  lineHeight: 1.7,
  margin: "0 0 16px",
};

const imageSectionStyle: React.CSSProperties = {
  backgroundColor: "#F5F3FF",
  borderRadius: "10px",
  padding: "20px",
  margin: "24px 0",
  textAlign: "center",
  border: `1px solid rgba(109,40,217,0.1)`,
};

const imageLabelStyle: React.CSSProperties = {
  color: TEXT_MUTED,
  fontSize: "13px",
  fontWeight: 600,
  margin: "0 0 12px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const imageStyle: React.CSSProperties = {
  maxWidth: "100%",
  borderRadius: "8px",
  border: `1px solid ${BORDER}`,
};

const quoteBoxStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "16px 0",
};

const quoteStyle: React.CSSProperties = {
  color: GOLD,
  fontSize: "16px",
  fontStyle: "italic",
  margin: 0,
};

const hrStyle: React.CSSProperties = {
  border: "none",
  borderTop: `1px solid ${BORDER}`,
  margin: "0 40px",
};

const footerStyle: React.CSSProperties = {
  padding: "32px 40px 40px",
  textAlign: "center",
  backgroundColor: "#F9FAFB",
};

const footerBrandStyle: React.CSSProperties = {
  color: PURPLE_DARK,
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  margin: "0 0 8px",
};

const footerTextStyle: React.CSSProperties = {
  color: TEXT_MUTED,
  fontSize: "13px",
  lineHeight: 1.6,
  margin: "0 auto 20px",
  maxWidth: "380px",
};

const footerLinksRowStyle: React.CSSProperties = {
  margin: "0 0 16px",
};

const footerLinkStyle: React.CSSProperties = {
  color: PURPLE,
  fontSize: "12px",
  textDecoration: "underline",
};

const footerQuoteStyle: React.CSSProperties = {
  color: GOLD,
  fontSize: "13px",
  fontStyle: "italic",
  margin: "16px 0 0",
};
