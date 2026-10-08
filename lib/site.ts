import type { Metadata } from "next";

export const SITE_URL = "https://veraops.ai";
export const SITE_NAME = "Vera AI";

// TODO: team to confirm the public contact address.
export const CONTACT_EMAIL = "hello@veraops.ai";

export const pages = {
  home: {
    path: "/",
    title: "Vera AI | Your organization's knowledge, turned into copilots",
    description:
      "Vera builds the knowledge layer and AI copilots that put your best expert's know-how in front of every person on your team.",
  },
  groundcontrol: {
    path: "/groundcontrol",
    title: "GroundControl by Vera | The AI copilot for field operations",
    description:
      "GroundControl helps field teams diagnose faster, fix it the first time, and capture what their best technicians know.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Vera AI",
    description:
      "How Vera AI handles information you send us and the basic usage data collected to run this website.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | Vera AI",
    description: "The terms that apply when you use the Vera AI website.",
  },
} as const;

export type PageKey = keyof typeof pages;

export function canonicalUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function pageMetadata(key: PageKey): Metadata {
  const page = pages[key];
  const url = canonicalUrl(page.path);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: key === "home" || key === "groundcontrol" ? "summary_large_image" : "summary",
      title: page.title,
      description: page.description,
    },
  };
}
