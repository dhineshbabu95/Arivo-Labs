import { privacy } from "@/content";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Dhinesh Babu. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-24 sm:pt-32 lg:pt-36">
      <article className="max-w-2xl min-w-0">
        <p className="site-eyebrow">Legal</p>
        <h1 className="site-section-title mt-3 sm:mt-5">{privacy.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground sm:mt-4">
          Last updated: {privacy.lastUpdated}
        </p>

        <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-12">
          {privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-sans text-lg font-semibold text-foreground">
                {section.heading}
              </h2>
              <p className="site-body mt-4">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </Section>
  );
}
