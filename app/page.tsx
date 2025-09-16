import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background film-grain">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <ContactSection />
    </main>
  )
}
