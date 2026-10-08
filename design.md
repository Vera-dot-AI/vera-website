# Vera website design

This is the design of the marketing site as it is built. It covers the choices that should stay stable if the page is extended: color, type, layout, motion, and the two logos.

The site is one landing page for Vera, a horizontal AI company. Vera builds a knowledge layer and the copilots and agents that sit on it, for any expert-driven work. The page is not about a single industry. GroundControl is the first product, shown in the Products section and linked onward. It is not the subject of the page.

There is no backend. The contact button is a `mailto:` link.

## Stack

Next.js 15 (App Router) and Tailwind CSS 3, deployed on Vercel. Visuals are SVG, CSS, and Framer Motion. Icons are `lucide-react`. Nothing is a stock image or a video.

GroundControl, the first product, has its own page at `/groundcontrol`. It uses this same system: the shared nav and footer, the same tokens, cards, and motion. The old page at `/products/ground-control` redirects there. There is no second visual style, and no icon font.

## Page structure

Sticky nav, then nine sections, then a footer. Two sections are dark. The rest are light. That rhythm is the page: light, light, dark, then five light sections, then a dark close.

| Section | Anchor | Ground |
| --- | --- | --- |
| Hero | — | Light |
| Problem | — | Light |
| Knowledge layer | `#platform` | Dark |
| Agents | `#agents` | Light |
| How it works | `#how-it-works` | Light |
| Products | `#products` | Light |
| Deploy your way | `#deploy` | Light |
| Why Vera | — | Light |
| Closing CTA | `#contact` | Dark |

Nav links are Platform, Agents, Products, and Deploy, in that order, plus a "Talk to us" button that scrolls to `#contact` on whichever page you are on. The section links point at the homepage (`/#platform` and so on) so they still work from the product page. The footer links are Products, Contact, LinkedIn, and Privacy. LinkedIn and Privacy are placeholders (`#`) until real URLs exist.

The GroundControl page adds a breadcrumb under the nav: Products / GroundControl. Its own rhythm is light, light, dark, light, light, light, dark: hero, problem, how it works, grounded answers, capabilities, who it's for, closing.

## Color

One accent, used for buttons, icons, glows, lines, and highlights. No second brand color.

| Role | Value | Tailwind |
| --- | --- | --- |
| Page background | `#F7F8FA` | `bg-canvas` |
| Headings | `#0B0D12` | `text-ink` |
| Body text | `#5B6170` | `text-body` |
| Borders | `#E4E7EC` | `border-line` |
| Accent start | `#4F46E5` | `accent` |
| Accent end | `#7C3AED` | `accent-violet` |
| Accent tint | `#EEF0FF` | `bg-accent-soft` |
| Dark sections | `#0B0D12` | `bg-ink` |

The accent gradient runs indigo to violet, `135deg` on buttons (`bg-accent-gradient`) and left to right where it fills a line or text (`text-gradient`). Dark sections add a soft radial glow in the same two hues, low opacity, blurred. They do not use a different palette.

Text on the accent buttons is white. Text on the dark sections is white for headings and `slate-300` for body, which stays above the contrast needed for body copy on `#0B0D12`.

## Type

Switzer for all text, self-hosted as woff2 in `app/fonts` and loaded with `next/font/local` as `--font-switzer` (weights 400, 500, 600, 700). Tailwind's `font-sans` points at it. The files come from Fontshare and are not hotlinked.

IBM Plex Mono, through `next/font/google` as `--font-plex-mono` (weights 400 and 500), is `font-mono`. It is only for small uppercase eyebrow labels and for UI chips such as source citations. Nothing else is monospaced. There is no serif.

Headlines (`h1`, `h2`, `h3`) are weight 600, tracking `-0.025em`, line height `1.05`. Body is weight 400, line height `1.6`. Nav labels, the wordmark, and buttons are weight 500.

Eyebrows are 11px, medium, uppercase, tracking `0.08em`, in the accent color (or indigo-200 on dark sections). A 6px gradient dot sits in front of the label.

The hero headline is the only display size: 44px on small screens, 60px from `sm`, 64px from `lg`, 72px from `xl` on the homepage, and up to 64px on the product page. Section headings run from 32px to 46px. Body copy is 16–18px.

## Layout

Content sits in a 1200px column with 20px of side padding on small screens and 32px from `sm` (`container` in `lib/utils.ts`). The hero column is wider, 1280px, so the diagram can sit beside the headline.

The nav is sticky, 64px tall, and uses a glass background: `backdrop-blur-xl` over a translucent white (or over the page color before the first scroll). A hairline border and a soft shadow appear once the page has scrolled.

Sections stack with `py-20` on small screens and `py-28` from `sm`. There are no dividers between light sections. The background color and the dark bands do the separating.

Breakpoints follow Tailwind defaults. The hero splits to two columns at `lg`. The agents grid is one column, then two at `md`, then the bento (one tall card plus three) at `lg`. The knowledge layer, products, and deploy sections split to two columns at `lg`.

## Components

**Buttons.** Primary buttons are pills (`rounded-pill`) filled with the accent gradient, white text, and a glow shadow. Secondary buttons are white pills with a 1px border and ink text. Both are at least 44px tall. The primary button brightens on hover. The arrow icon on it shifts 2px to the right.

**Cards.** White, 1px `border-line`, `rounded-2xl`, and a soft shadow. On hover they lift 4px, the border picks up a little accent, and the shadow warms toward indigo. A cursor-follow glow (a radial gradient centered on the pointer) shows on devices with a fine pointer only. It is off for touch.

**Why Vera cards** add a gradient border that sweeps around the card on hover, drawn with a masked conic gradient. The icon tile scales, rotates, and fills with the accent gradient at the same time.

**The "More copilots coming" card** is the exception: dashed border, no shadow lift, so it reads as upcoming rather than as a product.

## Logos

Two marks. They are not interchangeable.

**Vera** is the six-node network: three nodes down the left, three down the right, a diagonal across the top left, a diagonal across the bottom right, and a Y in the middle that connects down to the bottom node. This is the mark that was already the browser favicon. It is drawn in `components/ui/logo.tsx` and in `public/favicon.svg`, and it is what the nav and footer use. It uses `currentColor`, so it is ink on the light nav and white on the dark footer. The favicon file is the same geometry on the original square canvas, filled `#0B0D12`.

**GroundControl** is the filled glyph that used to be in the Vera nav. It now lives in `components/ui/ground-control-logo.tsx` and is shown beside the wordmark on the GroundControl page. It is not used on the marketing page.

## Motion

Motion is the point of the page, and it is kept slow. Loops run on CSS and SVG animation timelines rather than React state, so a playing loop does not re-render the page. Framer Motion is loaded through `LazyMotion` with the `domAnimation` feature set, and `MotionConfig` follows the user's reduced-motion setting.

Anything that loops is paused while it is off screen (`anim-paused` sets `animation-play-state`). Heavier demos do not start their timers until they are near the viewport.

### Hero

The background is a faint dot grid that drifts, plus two blurred accent glows that move on a 22–28s loop. On a fine pointer with motion allowed, the glows and the diagram card shift a few pixels with the cursor. Springs are soft (`stiffness: 60`).

The diagram is one 8-second loop. Four sources (PDF Manuals, Records, Work History, Docs) light in turn. A particle travels along a dotted connector into the knowledge-layer cluster, the cluster brightens, then a particle travels out to an agent card (Guide, Answer, or Report), which lights and shows its status word. Connectors are dotted at rest and solid accent while a particle is on them. The cluster is eleven nodes. Its edges twinkle on their own short loops.

### Problem

Three illustrations, each a CSS loop of about six seconds:

- Scattered: document fragments drift apart and settle back.
- Slow: a queue of dots and a progress bar that fills part way and stalls.
- Lost: one node, and the edges touching it, fade out of a small network and return.

### Knowledge layer

Three translucent planes in a slight isometric projection: Sources at the bottom, the knowledge layer in the middle, copilots and agents on top. Beams of light travel upward between them. Hovering, focusing, or tapping a plane lifts it, brightens it, and shows a one-line tooltip. Until the user interacts, the highlight cycles on its own. The three bullets on the left fade up in a stagger the first time they scroll into view.

### Agents

A bento of four live demos:

- Guided workflows: five steps check off one by one, and a copilot hint updates with the current step.
- Context-aware answers: a reply types out, then a source chip appears.
- Automated output: a report fills in line by line and ends on a "Ready to send" chip.
- Multi-agent orchestration: four agents pass a message around a ring, then all four send it into the center task.

### How it works

A gradient line draws as the section scrolls through the viewport. Each numbered step lights, and its icon rotates in, as the line reaches it. Horizontal on desktop, vertical on small screens.

### Products

A phone frame plays one loop: the technician's question types into the field, sends, the assistant streams three checks, a source chip appears ("Equipment manual, section 4.2"), and a "Report generated" toast slides in. Then it restarts. The caption under it is "Illustrative interface."

### Deploy

Three nested boundaries (shared cloud, isolated environment, your infrastructure) draw themselves in sequence the first time the diagram scrolls into view. Hovering a tier, in the diagram or in the list, scales that boundary slightly and fills it. The list and the diagram share one piece of state, so either one drives the other.

### Closing

Two blurred gradient orbs drift, and a generated constellation of stars and links drifts in three layers. The star positions are computed once from a fixed seed, so the server and client render the same sky.

### Reduced motion

`prefers-reduced-motion: reduce` does three things. CSS animation duration and iteration are collapsed in `globals.css`. Looping components freeze on their finished frame (the phone shows the full answer and the toast, the checklist shows complete, the timeline is fully drawn) instead of playing. Particles and SMIL motion are not rendered at all. Framer Motion's own reduced-motion handling covers the scroll reveals, which resolve to their visible end state.

## GroundControl page

`/groundcontrol` is a product page inside this system, not a separate brand. It reuses the nav, footer, buttons, cards, glow, and the same dark-section treatment. The breadcrumb sits under the nav. There is no log-in, get-started, or watch-demo control.

Its motion follows the same rules as the homepage: CSS and SVG timelines, paused off screen, frozen on the finished frame when reduced motion is on.

- The hero phone types the fault-code question, streams a one-line read, shows the manual citation, reveals three checks, marks step 1 done, then slides in a report toast.
- How it works draws a gradient line on scroll through Describe, Diagnose, Fix, and Report. Each icon settles in as the line reaches it.
- The dark section pulls glowing lines from Manuals, Service history, and Team notes into a question, then produces an answer with citation chips.
- The capabilities bento runs small loops: steps checking off, a citation chip, a hand-off moving between two people, a report filling in, and a history list highlighting one job at a time.
- Role cards use the same hover icon and gradient border sweep as Why Vera.
- The close reuses the homepage mesh and constellation.

The page does not describe how the product is built. No storage, pipelines, models, or infrastructure.

## Accessibility

The page is semantic: one `h1`, section headings as `h2`, cards as `h3`. The nav, footer, and mobile menu are labeled. The mobile menu closes on Escape. Focus states are a 2px indigo outline with a 3px offset, set globally. Decorative diagrams are `aria-hidden`; the hero diagram has a text alternative on a `role="img"` wrapper. Icon-only buttons have accessible names. The icon font is not loaded on this page, so ligature names cannot leak into the text.

## Content rules

Copy is the approved page copy. Do not add an About or founder section. Do not invent customer logos, testimonials, metrics, user counts, certifications, or uptime claims. Do not name an industry, a cloud, a model, a GPU, a price, a plan, or a lead pack.

The contact address is `hello@veraops.ai`. It is marked in the closing section for the team to confirm.

## Where things live

- `app/page.tsx` assembles the homepage. `app/groundcontrol/page.tsx` assembles the product page. `app/layout.tsx` loads Switzer and IBM Plex Mono and sets the favicon.
- `app/fonts/` holds the self-hosted Switzer woff2 files.
- `components/sections/` is one file per homepage section. `components/groundcontrol/` is the product page.
- `components/visuals/` holds the diagrams and demos.
- `components/ui/primitives.tsx` holds `Reveal`, `Eyebrow`, `GlowCard`, and `SectionHeading`.
- `lib/motion.ts` holds the reduced-motion flag, the in-view pause, and the step loop.
- `lib/timeline.ts` builds the shared keyframes for the hero loop.
- `app/globals.css` holds the keyframes, the card glow, the border sweep, and the reduced-motion override.

## Dependencies

Runtime: `next`, `react`, `react-dom`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.

The last two exist only to power `cn()` in `lib/utils.ts`. `@tailwindcss/container-queries` stays because the hero diagram sizes itself with container query units.

Removed as leftovers from the previous site: `next-themes` (the theme toggle is gone, and the marketing page is light only) and `@tailwindcss/forms` (nothing here is a real form). The theme provider went with them.
