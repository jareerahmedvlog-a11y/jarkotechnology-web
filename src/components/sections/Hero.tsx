import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

const floatCards = [
  { label: "Web Development", top: "8%", left: "0%", delay: "" },
  { label: "Mobile Apps", top: "22%", right: "0%", delay: "animate-float-delayed" },
  { label: "ERP Solutions", bottom: "28%", left: "2%", delay: "animate-float-delayed" },
  { label: "Automation", bottom: "12%", right: "4%", delay: "" },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden surface-grid section-pad !pt-10 md:!pt-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="glow-orb animate-pulse-soft top-10 -left-20 h-72 w-72 bg-blue/30"
        aria-hidden
      />
      <div
        className="glow-orb animate-pulse-soft right-0 bottom-0 h-80 w-80 bg-violet/25"
        aria-hidden
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-bg-elevated/80 px-2.5 py-1.5 pr-4">
            <Image
              src={siteConfig.logo.mark}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
              priority
            />
            <span className="text-xs font-semibold tracking-[0.14em] text-text-muted uppercase sm:text-sm">
              {siteConfig.tagline}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-[1.85rem] leading-[1.15] font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            Transform Your Business With{" "}
            <span className="gradient-text">Smart Digital Solutions</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            From custom ERP and CRM systems to websites, mobile applications,
            and business automation, Jarcode Technology builds digital solutions
            that help businesses grow in Pakistan and worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link href="/#services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>

          <div className="mt-8 flex items-start gap-3 text-sm text-text-dim">
            <span
              className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-bg-card"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
            </span>
            <p className="min-w-0 leading-relaxed">
              Karachi, Pakistan · Digital presence extending to Dubai ·
              International markets
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-blue/20 via-transparent to-violet/20 blur-2xl" />

          <div className="gradient-border relative overflow-hidden rounded-3xl p-4 sm:p-5">
            <div className="rounded-2xl border border-border bg-[#0a0a12] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <p className="text-xs text-text-dim">Software Dashboard Mockup</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 space-y-2 rounded-xl bg-[#0f172a] p-3">
                  <div className="h-2 w-12 rounded bg-blue/70" />
                  <div className="h-2 w-16 rounded bg-slate-700" />
                  <div className="h-2 w-10 rounded bg-slate-700" />
                  <div className="h-2 w-14 rounded bg-slate-700" />
                </div>
                <div className="col-span-2 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#0f172a] p-3">
                      <p className="text-[10px] text-text-dim">Projects</p>
                      <p className="mt-1 font-display text-xl font-bold text-text">
                        959+
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#0f172a] p-3">
                      <p className="text-[10px] text-text-dim">Solutions</p>
                      <p className="mt-1 font-display text-xl font-bold gradient-text">
                        Multi
                      </p>
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-gradient-to-r from-[#0f172a] via-[#1e1b4b]/40 to-[#0f172a] p-3">
                    <div className="flex h-full items-end gap-2">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-blue/40 to-violet/70"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {floatCards.map((card) => (
            <div
              key={card.label}
              className={`absolute z-10 hidden rounded-xl border border-border bg-bg-card/95 px-3 py-2 text-xs font-semibold text-text shadow-lg backdrop-blur sm:block animate-float ${card.delay}`}
              style={{
                top: "top" in card ? card.top : undefined,
                left: "left" in card ? card.left : undefined,
                right: "right" in card ? card.right : undefined,
                bottom: "bottom" in card ? card.bottom : undefined,
              }}
            >
              {card.label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
