"use client";

import { FileBarChart, ListChecks, MessageSquareText, Workflow } from "lucide-react";
import { GlowCard, Reveal, SectionHeading } from "@/components/ui/primitives";
import { AnswerDemo, GuidedDemo, OrchestrationDemo, ReportDemo } from "@/components/visuals/agent-demos";
import { cn, container } from "@/lib/utils";

const cards = [
  {
    title: "Guided workflows",
    body: "Step-by-step help through complex tasks.",
    icon: ListChecks,
    Demo: GuidedDemo,
    className: "lg:row-span-2",
  },
  {
    title: "Context-aware answers",
    body: "Grounded in your data, with sources.",
    icon: MessageSquareText,
    Demo: AnswerDemo,
    className: "lg:col-span-2",
  },
  {
    title: "Automated output",
    body: "Reports, summaries, and hand-offs written for you.",
    icon: FileBarChart,
    Demo: ReportDemo,
    className: "",
  },
  {
    title: "Multi-agent orchestration",
    body: "Specialized agents working together on one job.",
    icon: Workflow,
    Demo: OrchestrationDemo,
    className: "",
  },
];

export function Agents() {
  return (
    <section id="agents" aria-labelledby="agents-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading
          eyebrow="Agents"
          title={<span id="agents-title">Copilots that do the work with you.</span>}
          body="Built on the knowledge layer, Vera's agents guide tasks step by step, answer in context, and close the loop with reports and hand-offs."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, body, icon: Icon, Demo, className }, i) => (
            <Reveal as="li" key={title} delay={i * 0.06} className={cn(className)}>
              <GlowCard className="flex h-full flex-col gap-5 p-5 sm:p-6">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{title}</h3>
                  <p className="mt-1.5 text-body">{body}</p>
                </div>
                <div className="mt-auto flex-1 [&>*]:h-full">
                  <Demo />
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
