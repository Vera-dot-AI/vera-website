/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-primary": "var(--on-primary)",
        "secondary-container": "var(--secondary-container)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
        "surface-bright": "var(--surface-bright)",
        "secondary-fixed": "var(--secondary-fixed)",
        "surface": "var(--surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim)",
        "tertiary-fixed": "var(--tertiary-fixed)",
        "on-surface": "var(--on-surface)",
        "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
        "outline-variant": "var(--outline-variant)",
        "primary": "var(--primary)",
        "on-secondary-container": "var(--on-secondary-container)",
        "on-error-container": "var(--on-error-container)",
        "outline": "var(--outline)",
        "surface-variant": "var(--surface-variant)",
        "secondary": "var(--secondary)",
        "primary-container": "var(--primary-container)",
        "on-secondary-fixed": "var(--on-secondary-fixed)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        "surface-container-highest": "var(--surface-container-highest)",
        "surface-tint": "var(--surface-tint)",
        "on-secondary": "var(--on-secondary)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
        "tertiary": "var(--tertiary)",
        "primary-fixed": "var(--primary-fixed)",
        "on-primary-container": "var(--on-primary-container)",
        "inverse-surface": "var(--inverse-surface)",
        "on-background": "var(--on-background)",
        "surface-dim": "var(--surface-dim)",
        "tertiary-container": "var(--tertiary-container)",
        "error": "var(--error)",
        "inverse-primary": "var(--inverse-primary)",
        "on-error": "var(--on-error)",
        "on-tertiary": "var(--on-tertiary)",
        "surface-container": "var(--surface-container)",
        "surface-container-low": "var(--surface-container-low)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "error-container": "var(--error-container)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed)",
        "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
        "surface-container-high": "var(--surface-container-high)",
        "background": "var(--background)"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "4px",
        "margin-mobile": "20px",
        "container-max": "1440px",
        "gutter": "24px",
        "margin-desktop": "64px"
      },
      fontFamily: {
        "headline-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "label-caps": ["var(--font-jetbrains-mono)", "monospace"],
        "headline-xl": ["var(--font-hanken-grotesk)", "sans-serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-hanken-grotesk)", "sans-serif"],
        "headline-md": ["var(--font-hanken-grotesk)", "sans-serif"],
        "body-md": ["var(--font-inter)", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "label-caps": ["11px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500" }],
        "headline-xl": ["52px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-lg": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-lg-mobile": ["26px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "headline-md": ["20px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
