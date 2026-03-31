import { PortraitSpring } from "@/components/motion/PortraitSpring";
import { Container } from "@/components/Container";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { home, site } from "@/content";

export function About() {
  return (
    <section
      id="about"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-24 lg:items-start">
          <Reveal variant="slideRight" className="flex flex-col items-center gap-8 sm:gap-10 lg:sticky lg:top-28 lg:items-start">
            <div className="text-center lg:text-left">
              <p className="site-eyebrow">{home.about.title}</p>
              <h2 className="site-section-title mt-4 sm:mt-5">{site.name}</h2>
            </div>
            <PortraitSpring>
              <ProfilePortrait className="lg:mx-0" />
            </PortraitSpring>
          </Reveal>

          <RevealStagger
            className="site-body editorial-measure mx-auto space-y-6 sm:space-y-7 lg:mx-0 lg:max-w-none lg:pr-4"
            stagger={0.09}
            delayChildren={0.04}
          >
            {home.about.paragraphs.map((p, i) => (
              <RevealItem key={i} soft>
                <p className="text-[1.0625rem] leading-[1.78] sm:text-[1.0625rem]">
                  {p}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  );
}
