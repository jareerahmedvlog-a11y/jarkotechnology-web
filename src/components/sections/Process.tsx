import { processSteps } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="section-pad bg-[#070b16]" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="How We Work"
          title="Our Development Process"
          description="A clear path from discovery to launch, adapted to each project's scope."
        />

        {/* Mobile + tablet vertical */}
        <ol className="relative space-y-6 lg:hidden">
          <div
            className="absolute top-2 bottom-2 left-[1.15rem] w-px bg-gradient-to-b from-blue via-indigo to-violet"
            aria-hidden
          />
          {processSteps.map((step) => (
            <li key={step.step} className="relative flex gap-4 pl-1">
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-400/40 bg-[#0b1224] text-sm font-bold text-indigo-200">
                {step.step}
              </span>
              <div className="gradient-border min-w-0 flex-1 rounded-2xl p-4">
                <h3 className="font-display font-semibold text-text">{step.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Laptop / desktop horizontal */}
        <ol className="relative hidden lg:grid lg:grid-cols-6 lg:gap-3">
          <div
            className="absolute top-5 right-8 left-8 h-px bg-gradient-to-r from-blue via-indigo to-violet"
            aria-hidden
          />
          {processSteps.map((step) => (
            <li key={step.step} className="relative pt-0 text-center">
              <span className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/40 bg-[#0b1224] text-sm font-bold text-indigo-200 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
