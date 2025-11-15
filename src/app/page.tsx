"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import QuickStats from "@/components/quick-stats"
import Introduction from "@/components/introduction"
import WhyChoose from "@/components/why-choose"
import PricingPlots from "@/components/pricing-plots"
import LocationMap from "@/components/location-map"
import Gallery from "@/components/gallery"
import Amenities from "@/components/amenities"
import FAQs from "@/components/faqs"
import Footer from "@/components/footer"
import MasterPlan from "@/components/master-plan"


export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <QuickStats />
      <Introduction />
      <WhyChoose />
      <PricingPlots />
      <LocationMap />
      <Gallery />
      <Amenities />
      <MasterPlan />
      <FAQs />
      <Footer />
    </main>
  )
}
