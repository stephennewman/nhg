import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { EditorialBreak } from "@/components/editorial-break"
import { StudioSection } from "@/components/studio-section"
import { ApproachSection } from "@/components/approach-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProjectsSection />
      <EditorialBreak />
      <StudioSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
