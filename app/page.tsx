import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { EditorialBreak } from "@/components/editorial-break"
import { ApproachSection } from "@/components/approach-section"
import { StudioSection } from "@/components/studio-section"
import { OurApproachSection } from "@/components/our-approach-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhoWeAreSection />
      <ApproachSection />
      <OurApproachSection />
      <EditorialBreak />
      <StudioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
