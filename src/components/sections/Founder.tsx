import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Founder() {
  const { founder, logo } = siteConfig;

  return (
    <section
      id="founder"
      className="section-pad bg-[#07070c]"
      aria-labelledby="founder-heading"
    >
      <Container>
        <SectionHeading
          id="founder-heading"
          eyebrow="Leadership"
          title="Meet Our Founder"
        />

        <a
          href={founder.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-border group mx-auto grid max-w-4xl items-center gap-8 overflow-hidden rounded-3xl p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-10 md:p-10"
          aria-label={`${founder.name} — view Instagram profile`}
        >
          <div className="mx-auto shrink-0">
            <div className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56">
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-90 blur-[2px]"
                aria-hidden
              />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10 bg-[#0a0a12] shadow-[0_0_40px_-8px_rgba(0,212,255,0.45)]">
                <Image
                  src={founder.image}
                  alt={founder.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="224px"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <Image
              src={logo.mark}
              alt=""
              width={48}
              height={48}
              className="mx-auto h-12 w-12 rounded-full object-cover shadow-[0_0_18px_-4px_rgba(192,38,255,0.5)] md:mx-0"
            />
            <h3 className="mt-5 font-display text-2xl font-bold text-text group-hover:text-cyan-200 sm:text-3xl">
              {founder.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-indigo-300 sm:text-base">
              {founder.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {founder.bio}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Follow on Instagram
              <span aria-hidden>↗</span>
            </span>
          </div>
        </a>
      </Container>
    </section>
  );
}
