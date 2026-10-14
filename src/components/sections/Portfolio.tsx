"use client";

import { useMemo, useState } from "react";
import {
  getWhatsAppLink,
  portfolioCategories,
  portfolioProjects,
  type PortfolioCategory,
} from "@/config/site";
import { PortfolioThumb } from "@/components/sections/PortfolioThumb";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="work" className="section-pad bg-[#070b16]" aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          id="work-heading"
          eyebrow="Our Work"
          title="Ideas Turned Into Digital Products"
          description="Cards below are clearly labeled design placeholders until real project details and screenshots are supplied."
        />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Portfolio categories"
        >
          {portfolioCategories.map((category) => {
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                className={cn(
                  "rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors",
                  selected
                    ? "border-indigo-400/50 bg-indigo-500/15 text-text"
                    : "border-border bg-transparent text-text-muted hover:border-border-strong hover:text-text",
                )}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-border bg-bg-card p-8 text-center text-text-muted">
            No projects in this category yet. Check back soon or discuss a
            similar project with us.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="gradient-border overflow-hidden rounded-2xl"
              >
                <div className="relative">
                  <PortfolioThumb
                    category={project.category}
                    title={project.title}
                  />
                  {project.isPlaceholder ? (
                    <span className="absolute top-3 left-3 z-10 rounded-md bg-black/70 px-2 py-1 text-[11px] font-semibold tracking-wide text-amber-200 uppercase">
                      Design Placeholder
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-wide text-indigo-300 uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {project.description}
                  </p>
                  {project.technologies?.length ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border px-2 py-1 text-[11px] text-text-dim"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <a
                    href={getWhatsAppLink(
                      `Hello Jarcode Technology, I would like to discuss a project similar to: ${project.title}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-indigo-300 hover:text-indigo-200"
                  >
                    Discuss a Similar Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
