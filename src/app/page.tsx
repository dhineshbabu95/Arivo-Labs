import {
  BeforeAfter,
  ContactCta,
  Hero,
  HowItWorks,
  Process,
  Results,
  Services,
  Trust,
  WhoItsFor,
} from "@/components/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoItsFor />
      <Services />
      <HowItWorks />
      <BeforeAfter />
      <Results />
      <Process />
      <Trust />
      <ContactCta />
    </>
  );
}
