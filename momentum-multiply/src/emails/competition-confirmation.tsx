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
  Button,
  Hr,
} from "@react-email/components";

interface CompetitionConfirmationEmailProps {
  name: string;
}

const GOLD = "#D4A843";
const PURPLE_LIGHT = "#7C3AED";
const PURPLE = "#6D28D9";
const INDIGO = "#4F46E5";
const PURPLE_DARK = "#1E1B4B";
const WHITE = "#FFFFFF";
const TEXT_MUTED = "#9CA3AF";
const TEXT_BODY = "#374151";
const BORDER = "#E5E7EB";

export default function CompetitionConfirmationEmail({
  name,
}: CompetitionConfirmationEmailProps) {
  const firstName = name?.split(" ")[0] || "there";

  return (
    <Html>
      <Head />
      <Preview>
        You&apos;re in! Welcome to the Unlock Your Future Self competition — your
        journey starts now.
      </Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Row>
              <Column align="center">
                <Text style={brandStyle}>MOMENTUM MULTIPLY</Text>
              </Column>
            </Row>
          </Section>

          {/* Hero Banner */}
          <Section style={heroStyle}>
            <Heading style={heroTitleStyle}>
              You&apos;re <span style={{ color: GOLD }}>In!</span>
            </Heading>
            <Text style={heroSubtitleStyle}>
              Welcome to the Unlock Your Future Self competition
            </Text>
          </Section>

          {/* Body */}
          <Section style={bodySectionStyle}>
            <Heading style={greetingStyle}>Hi {firstName},</Heading>

            <Text style={paragraphStyle}>
              Thank you for entering the Momentum Multiply &quot;Unlock Your Future
              Self&quot; competition. Your entry has been received and recorded.
            </Text>

            <Text style={paragraphStyle}>
              This is more than just a competition — it&apos;s the beginning of a
              journey toward becoming the healthiest, happiest, and most fulfilled
              version of you.
            </Text>

            {/* Campaign Info Box */}
            <Section style={infoBoxStyle}>
              <Heading as="h3" style={infoBoxTitleStyle}>
                How It Works
              </Heading>
              <Row style={pillarRowStyle}>
                {[
                  { icon: "&#9998;", title: "Imagine", desc: "Envision your future self" },
                  { icon: "&#9889;", title: "Activate", desc: "Take small, intentional steps" },
                  { icon: "&#127775;", title: "Transform", desc: "Earn rewards as you grow" },
                ].map((step) => (
                  <Column key={step.title} style={pillarColStyle} align="center">
                    <Text style={pillarIconStyle}>{step.icon}</Text>
                    <Text style={pillarTitleStyle}>{step.title}</Text>
                    <Text style={pillarDescStyle}>{step.desc}</Text>
                  </Column>
                ))}
              </Row>
            </Section>

            <Text style={paragraphStyle}>
              Every activation you complete — the Future Self Letter, The Future
              Call, The Blueprint of You, and more — earns you additional
              competition entries. The more you engage, the better your chances of
              winning.
            </Text>

            {/* CTA */}
            <Section style={ctaSectionStyle}>
              <Button href="https://momentum-multiply.co.za/activations" style={ctaButtonStyle}>
                Explore Activations
              </Button>
            </Section>

            <Text style={paragraphStyle}>
              We&apos;ll be in touch with updates about the campaign, new
              activations, and competition news. In the meantime, check in with
              yourself and start exploring what your future self looks like.
            </Text>
          </Section>

          <Hr style={hrStyle} />

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerBrandStyle}>Momentum Multiply</Text>
            <Text style={footerTextStyle}>
              Rewarding you for the small, positive choices you make every day.
              Because your future self is closer than you think.
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
              <Column align="center">
                <Link href="#" style={footerLinkStyle}>
                  Competition Rules
                </Link>
              </Column>
            </Row>

            <Text style={footerDisclaimerStyle}>
              This email was sent because you entered the Unlock Your Future Self
              competition. Your data is processed in accordance with POPIA. If you
              did not enter this competition, please disregard this email.
            </Text>

            <Text style={footerQuoteStyle}>
              &ldquo;The future you is created by what you do today.&rdquo;
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

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

const infoBoxStyle: React.CSSProperties = {
  backgroundColor: "#F5F3FF",
  borderRadius: "10px",
  padding: "28px 24px",
  margin: "24px 0",
  border: `1px solid ${"rgba(109,40,217,0.1)"}`,
};

const infoBoxTitleStyle: React.CSSProperties = {
  color: PURPLE,
  fontSize: "16px",
  fontWeight: 700,
  textAlign: "center",
  margin: "0 0 20px",
};

const pillarRowStyle: React.CSSProperties = {
  margin: "0",
};

const pillarColStyle: React.CSSProperties = {
  padding: "0 8px",
};

const pillarIconStyle: React.CSSProperties = {
  fontSize: "28px",
  margin: "0 0 8px",
};

const pillarTitleStyle: React.CSSProperties = {
  color: PURPLE_LIGHT,
  fontSize: "14px",
  fontWeight: 700,
  margin: "0 0 4px",
};

const pillarDescStyle: React.CSSProperties = {
  color: TEXT_MUTED,
  fontSize: "12px",
  margin: 0,
};

const ctaSectionStyle: React.CSSProperties = {
  textAlign: "center",
  margin: "28px 0 24px",
};

const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: PURPLE,
  color: WHITE,
  fontSize: "16px",
  fontWeight: 600,
  padding: "14px 36px",
  borderRadius: "8px",
  textDecoration: "none",
  display: "inline-block",
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
  color: PURPLE_LIGHT,
  fontSize: "12px",
  textDecoration: "underline",
};

const footerDisclaimerStyle: React.CSSProperties = {
  color: TEXT_MUTED,
  fontSize: "11px",
  lineHeight: 1.5,
  margin: "0 0 12px",
};

const footerQuoteStyle: React.CSSProperties = {
  color: GOLD,
  fontSize: "13px",
  fontStyle: "italic",
  margin: "16px 0 0",
};
