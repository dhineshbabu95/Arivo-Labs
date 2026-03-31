import { MediaFrame } from "@/components/media/MediaFrame";
import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { home } from "@/content";

export function BeyondWork() {
  return (
    <section
      id="beyond"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-20 lg:items-center">
          <Reveal
            variant="slideRight"
            className="mx-auto w-full max-w-2xl lg:mx-0 xl:max-w-none"
          >
            <p className="site-eyebrow">{home.beyondWork.title}</p>
            <h2 className="site-section-title mt-4 sm:mt-5">
              {home.beyondWork.heading}
            </h2>
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <MediaFrame
                src={home.beyondWork.visual.src}
                alt={home.beyondWork.visual.alt}
                slotLabel="Add: _source/beyond-work.* → npm run images:resize (1200×800). See IMAGE_SLOTS.md."
                aspectClass=""
                imageWidth={683}
                imageHeight={1024}
                sizes="(max-width: 1024px) 92vw, (max-width: 1280px) 38vw, 480px"
                className="mx-auto max-w-[430px] rounded-xl border border-border/70 bg-card/30 p-2 shadow-[0_24px_60px_-24px_hsl(var(--primary)/0.25)] lg:mx-0 dark:border-border/60"
              />
            </div>
          </Reveal>

          <RevealStagger
            className="site-body editorial-measure mx-auto max-w-2xl space-y-7 rounded-2xl border border-border/70 bg-card/35 p-6 sm:p-8 lg:mx-0 lg:max-w-none lg:self-center lg:p-10 dark:border-border/60"
            stagger={0.1}
            delayChildren={0.05}
          >
            {home.beyondWork.paragraphs.map((p, i) => (
              <RevealItem key={i} soft>
                <p className="text-[1.02rem] leading-[1.9] text-muted-foreground sm:text-[1.03rem] sm:leading-[1.9]">
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
