import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certificate() {
  return (
    <section
      id="achievements"
      className="section-pad"
      aria-labelledby="certificate-heading"
    >
      <Container>
        <SectionHeading
          id="certificate-heading"
          eyebrow="Milestone Recognition"
          title="Celebrating Our Technology Journey"
          description="A company-created milestone display — not a third-party award, accreditation, government certification, or ISO certificate."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-blue via-indigo to-violet opacity-60 blur-[2px]"
            aria-hidden
          />
          <article className="relative overflow-hidden rounded-3xl border border-indigo-300/30 bg-gradient-to-b from-[#0d1428] to-[#080c18] p-6 sm:p-10">
            <div
              className="pointer-events-none absolute inset-4 rounded-2xl border border-indigo-400/20"
              aria-hidden
            />

            <div className="relative text-center">
              <Image
                src={siteConfig.logo.full}
                alt=""
                width={112}
                height={112}
                className="mx-auto h-28 w-28 rounded-full object-cover shadow-[0_0_32px_-4px_rgba(0,212,255,0.45)]"
              />
              <p className="mt-4 text-xs font-semibold tracking-[0.25em] text-indigo-300 uppercase">
                Company Milestone
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-balance text-text sm:text-3xl">
                959+ Software Projects & Digital Solutions
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-muted sm:text-base">
                Building digital experiences and software solutions for
                businesses.
              </p>

              <div
                className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full border border-violet-400/40 bg-gradient-to-br from-blue/20 to-violet/30"
                aria-hidden
              >
                <svg viewBox="0 0 48 48" className="h-10 w-10">
                  <defs>
                    <linearGradient id="seal" x1="0" y1="0" x2="48" y2="48">
                      <stop stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    fill="none"
                    stroke="url(#seal)"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 25l5 5 11-12"
                    fill="none"
                    stroke="url(#seal)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="mt-6 font-display text-lg font-semibold text-text">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-sm text-text-muted">{siteConfig.tagline}</p>
            </div>
          </article>
        </div>

        <div className="mt-8 text-center">
          <Link href="/#work" className="btn-secondary">
            Our Journey
          </Link>
        </div>
      </Container>
    </section>
  );
}
