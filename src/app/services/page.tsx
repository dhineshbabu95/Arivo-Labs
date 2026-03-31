import { services } from "@/content";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Services",
  description:
    "Cloud, web, and data pipeline work for teams that want less copy-paste and fewer surprises.",
};

export default function ServicesPage() {
  return (
    <Section className="pt-24 sm:pt-32 lg:pt-36">
      <div className="max-w-4xl xl:max-w-5xl">
        <p className="site-eyebrow">What I build</p>
        <h1 className="site-section-title mt-3 sm:mt-5">{services.title}</h1>
        <p className="site-body mt-6 sm:mt-8">{services.intro}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {services.items.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="group rounded-lg border border-border/80 bg-card p-6 shadow-[var(--card-shadow)] transition-all duration-300 ease-out hover:-translate-y-px hover:border-primary/35 hover:shadow-[var(--elevated-shadow)] hover:shadow-primary/10 dark:border-border/70 dark:bg-card/90 dark:hover:shadow-primary/[0.08] sm:p-8"
          >
            <h2 className="font-sans text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-xl">
              {service.title}
            </h2>

            <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-9">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80 dark:text-primary/75">
                  Scope
                </h3>
                <ul className="site-body mt-4 space-y-2.5 text-foreground/90">
                  {service.what.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary/70">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80 dark:text-primary/75">
                  Who it&apos;s for
                </h3>
                <p className="site-body mt-4 text-foreground/90">{service.who}</p>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80 dark:text-primary/75">
                  Result
                </h3>
                <p className="site-body mt-4 text-foreground/90">
                  {service.outcome}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
