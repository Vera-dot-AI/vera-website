import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * TODO: add the Vera AI LinkedIn URL to sameAs.
 * TODO: add the GitHub organization URL to sameAs (https://github.com/<org>).
 * Do not invent either URL.
 */
const sameAs: string[] = [];

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon.png`,
    email: CONTACT_EMAIL,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
