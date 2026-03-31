import { SiteZone } from "@/components/SiteZone";
import {
  About,
  BeyondWork,
  ContactCta,
  Hero,
  Projects,
  Services,
} from "@/components/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />

      <div className="site-zone-bridge" aria-hidden />

      <SiteZone variant="build">
        <Projects />
        <Services />
      </SiteZone>

      <div className="site-zone-bridge site-zone-bridge-beyond" aria-hidden />

      <SiteZone variant="beyond">
        <BeyondWork />
      </SiteZone>

      <ContactCta />
    </>
  );
}
