import Link from "next/link";
import { getWhatsAppLink, services } from "@/config/site";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="section-pad" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="What We Build"
          title="Our Digital Solutions"
          description="Scope for each engagement depends on your requirements, goals, and agreed deliverables — features are not assumed by default."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group gradient-border flex flex-col rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-violet/20 text-indigo-300">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>
              <a
                href={getWhatsAppLink(
                  `Hello Jarcode Technology, I would like to discuss ${service.title}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-300 transition-colors group-hover:text-indigo-200"
              >
                Discuss Your Project
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-dim">
          Prefer email-style inquiry?{" "}
          <Link href="/#contact" className="text-indigo-300 hover:text-indigo-200">
            Send a project brief
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
