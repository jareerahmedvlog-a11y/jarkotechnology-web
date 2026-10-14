import Link from "next/link";
import { values } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-pad bg-[#070b16]" aria-labelledby="about-heading">
      <Container>
        <SectionHeading
          id="about-heading"
          eyebrow="About Jarcode Technology"
          title="Technology That Moves Your Business Forward"
          align="left"
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>
              Jarcode Technology is a digital solutions provider founded by
              Jareer Ahmed. We help businesses turn their ideas into practical,
              scalable, and reliable technology.
            </p>
            <p>
              Our expertise includes custom software development, ERP and CRM
              solutions, website development, mobile applications, business
              automation, and modern digital products.
            </p>
            <p>
              Based in Karachi, Pakistan, with digital operations extending to
              Dubai, our goal is to deliver technology that simplifies
              operations, improves productivity, and supports business growth.
            </p>
            <Link href="/#services" className="btn-primary mt-2 inline-flex">
              Explore Our Services
            </Link>
          </div>

          <div className="grid gap-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="gradient-border rounded-2xl p-5 transition-colors hover:bg-bg-card-hover"
              >
                <h3 className="font-display text-lg font-semibold text-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
