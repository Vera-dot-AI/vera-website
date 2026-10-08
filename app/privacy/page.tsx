import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="8 October 2026">
      <LegalSection title="Who we are">
        <p>
          Vera AI, India. Contact us at{" "}
          <a className="font-medium text-ink underline decoration-accent/40 underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
      <LegalSection title="What we collect">
        <p>
          We collect only what you choose to send us by email or contact form: your name, email address, company, and
          message. Our hosting provider also collects basic anonymous usage data, such as page views and browser type.
        </p>
      </LegalSection>
      <LegalSection title="How we use it">
        <p>We use this information to reply to inquiries and to improve the website. We do not sell personal data.</p>
      </LegalSection>
      <LegalSection title="Cookies">
        <p>This website does not use tracking cookies.</p>
      </LegalSection>
      <LegalSection title="Third parties">
        <p>The site is hosted on Vercel. Email is handled by our email provider.</p>
      </LegalSection>
      <LegalSection title="Data retention and deletion">
        <p>
          Email{" "}
          <a className="font-medium text-ink underline decoration-accent/40 underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          to request access to or deletion of the information you sent us.
        </p>
      </LegalSection>
      <LegalSection title="Changes">
        <p>We may update this policy. The date at the top of this page shows the latest version.</p>
      </LegalSection>
    </LegalPage>
  );
}
