import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("terms");

const mail = (
  <a className="font-medium text-ink underline decoration-accent/40 underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
    {CONTACT_EMAIL}
  </a>
);

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="8 October 2026">
      <LegalSection title="Using this website">
        <p>This website is provided for information about Vera AI and its products.</p>
      </LegalSection>
      <LegalSection title="No warranties">
        <p>Content is provided as-is, without warranties.</p>
      </LegalSection>
      <LegalSection title="Ownership">
        <p>The Vera AI name, logo, and content belong to Vera AI. Don&rsquo;t copy them without permission.</p>
      </LegalSection>
      <LegalSection title="Product information">
        <p>Product descriptions and illustrative interfaces are for information only and may change.</p>
      </LegalSection>
      <LegalSection title="Limitation of liability">
        <p>
          To the extent permitted by law, Vera AI is not liable for any loss or damage arising from your use of this
          website or from reliance on its content.
        </p>
      </LegalSection>
      <LegalSection title="Governing law">
        <p>These terms are governed by the laws of India.</p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>Questions about these terms: {mail}.</p>
      </LegalSection>
    </LegalPage>
  );
}
