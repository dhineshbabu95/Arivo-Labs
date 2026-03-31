import { about } from "@/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ProfilePortrait } from "@/components/ProfilePortrait";

export const metadata = {
  title: "About",
  description:
    "Chennai to Australia, engineering to data work, and why I like building systems that keep running.",
};

export default function AboutPage() {
  const brandName = "Arivo Labs";

  return (
    <Section className="pt-24 sm:pt-32 lg:pt-36">
      <div className="grid gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16 xl:gap-24">
        <div className="min-w-0">
          <p className="site-eyebrow">About</p>
          <h1 className="site-section-title mt-3 sm:mt-5">{about.title}</h1>
          <div className="site-body mt-8 space-y-5 sm:mt-12 sm:space-y-6">
            {about.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph.includes(brandName) ? (
                  <>
                    {paragraph.split(brandName)[0]}
                    <span className="font-display font-bold tracking-tight text-amber-600 dark:text-amber-400">{brandName}</span>
                    {paragraph.split(brandName)[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
          <div className="mt-10 sm:mt-14">
            <Button
              href="/contact"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Say hello
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProfilePortrait priority />
        </div>
      </div>
    </Section>
  );
}
