import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contact, home, site } from "@/content";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="contact-epilogue scroll-mt-20 pb-28 pt-20 sm:scroll-mt-24 sm:pb-36 sm:pt-24 lg:pb-44 lg:pt-28"
    >
      <Container>
        <Reveal variant="scale" className="block">
          <Card className="site-card-premium border border-border/80 bg-card shadow-[var(--card-shadow)] hover:border-border hover:shadow-[var(--elevated-shadow)] dark:border-border/70 dark:bg-card/95">
            <CardContent className="flex flex-col gap-10 p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:p-10 lg:gap-14 lg:p-12">
              <RevealStagger
                className="min-w-0 max-w-xl"
                stagger={0.08}
                delayChildren={0.04}
              >
                <RevealItem soft>
                  <p className="site-eyebrow">{home.contact.title}</p>
                </RevealItem>
                <RevealItem soft>
                  <h2 className="mt-4 font-display text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground sm:mt-5 sm:text-3xl sm:leading-tight">
                    {home.contact.heading}
                  </h2>
                </RevealItem>
                <RevealItem soft>
                  <p className="site-body editorial-measure mt-4 sm:mt-5">
                    {home.contact.intro}
                  </p>
                </RevealItem>
                <RevealItem soft>
                  <p className="mt-3 text-sm text-muted-foreground sm:mt-4">
                    {contact.responseTime}
                  </p>
                </RevealItem>
              </RevealStagger>

              <RevealStagger
                className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-col sm:items-stretch md:flex-row md:items-center"
                stagger={0.1}
                delayChildren={0.15}
              >
                <RevealItem>
                  <Button
                    asChild
                    size="lg"
                    className="group h-12 w-full min-h-12 transition-transform duration-200 hover:-translate-y-px sm:h-11 sm:w-auto"
                  >
                    <Link href="/contact">
                      <Mail className="size-4 transition-transform duration-200 group-hover:-rotate-6" />
                      {contact.form.submit}
                    </Link>
                  </Button>
                </RevealItem>
                <RevealItem>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 w-full min-h-12 border-border/80 bg-background/35 backdrop-blur-sm transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-background/60 sm:h-11 sm:w-auto"
                  >
                    <Link
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.linkedinLabel}
                    </Link>
                  </Button>
                </RevealItem>
              </RevealStagger>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
