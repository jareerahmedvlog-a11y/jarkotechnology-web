import { getWhatsAppLink, siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-[#070b16]" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's Build Something Great Together"
          description="Share your project goals and we will follow up with next steps. WhatsApp is the fastest way to reach us."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="gradient-border h-fit rounded-3xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-text">
              Direct Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-text-muted">
              <li>
                <p className="text-text-dim">WhatsApp / Phone</p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-base font-semibold text-text hover:text-indigo-200"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-text-dim">Location</p>
                <p className="mt-1 text-text">{siteConfig.location.summary}</p>
              </li>
              <li>
                <p className="text-text-dim">Social</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-300 hover:text-indigo-200"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-300 hover:text-indigo-200"
                  >
                    YouTube
                  </a>
                </div>
              </li>
            </ul>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full"
            >
              Chat on WhatsApp
            </a>
          </aside>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
