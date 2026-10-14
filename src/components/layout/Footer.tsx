import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink, services, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-black">
      <Container className="section-pad !pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src={siteConfig.logo.full}
              alt={siteConfig.logo.alt}
              width={120}
              height={120}
              className="h-24 w-24 rounded-full object-cover shadow-[0_0_28px_-6px_rgba(192,38,255,0.45)]"
            />
            <p className="mt-4 font-display text-sm font-semibold text-text">
              {siteConfig.name} — {siteConfig.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Digital solutions and software development for businesses in
              Pakistan and international markets, with operations extending to
              Dubai.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-text uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-text uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/#services"
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-text uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-text"
                >
                  WhatsApp: {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>{siteConfig.location.summary}</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition-colors hover:text-text"
                aria-label="Jarcode Technology on Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zm5.2-8.7a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition-colors hover:text-text"
                aria-label="Jarcode Technology on YouTube"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M22 12.2s0-3.2-.4-4.6a2.9 2.9 0 0 0-2-2C17.9 5.2 12 5.2 12 5.2s-5.9 0-7.6.4a2.9 2.9 0 0 0-2 2C2 9 2 12.2 2 12.2s0 3.2.4 4.6a2.9 2.9 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.9 2.9 0 0 0 2-2c.4-1.4.4-4.6.4-4.6zM10 15.2v-6l5.2 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-text">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
