"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { getWhatsAppLink, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-black/85 backdrop-blur-xl"
          : "border-transparent bg-black/55 backdrop-blur-md",
      )}
    >
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link
          href="/#home"
          className="relative z-50 flex shrink-0 items-center gap-2.5"
          onClick={close}
        >
          <Image
            src={siteConfig.logo.mark}
            alt={siteConfig.logo.alt}
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover shadow-[0_0_20px_-4px_rgba(0,212,255,0.55)] sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden font-display text-sm font-bold tracking-wide sm:block">
            <span className="gradient-text">Jarcode</span>{" "}
            <span className="text-text-muted">Technology</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            WhatsApp
          </a>
          <Link href="/#contact" className="btn-primary !w-auto px-4 py-2.5 text-sm">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-elevated text-text lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full rounded bg-current transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded bg-current transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={close}
      />

      <aside
        id={panelId}
        className={cn(
          "fixed top-0 right-0 z-40 flex h-full w-[min(20rem,88vw)] flex-col border-l border-border bg-[#07070c] shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="font-display text-sm font-semibold tracking-wide text-text">
            Menu
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#25D366]/15 px-3 py-2 text-sm font-semibold text-[#4ADE80]"
            onClick={close}
          >
            WhatsApp
          </a>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-text transition-colors hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <Link
            href="/#contact"
            onClick={close}
            className="btn-primary w-full text-center"
          >
            Get a Quote
          </Link>
        </div>
      </aside>
    </header>
  );
}
