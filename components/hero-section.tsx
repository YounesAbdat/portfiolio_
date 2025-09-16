"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Play, Film } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    portfolioSection?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    // In a real implementation, this would download the actual CV
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "CV_Video_Editor_Filmmaker.pdf"
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-primary/20 to-transparent z-20">
        <div className="flex flex-col h-full justify-evenly">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-6 h-6 bg-primary/40 rounded-sm mx-3" />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-primary/20 to-transparent z-20">
        <div className="flex flex-col h-full justify-evenly">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-6 h-6 bg-primary/40 rounded-sm mx-3" />
          ))}
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=cinematic showreel with dramatic lighting and film equipment"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Film className="h-12 w-12 text-primary animate-pulse" />
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <Film className="h-12 w-12 text-primary animate-pulse" />
        </div>

        <h1 className="cinematic-text text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
          <span className="block text-balance">Every frame</span>
          <span className="block text-primary">tells a story</span>
          <span className="block text-balance">worth sharing.</span>
        </h1>

      

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold smooth-transition group border-2 border-primary"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch My Stories
          </Button>

          <Button
            onClick={downloadCV}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold smooth-transition group bg-transparent"
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download CV
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-primary animate-bounce">
          <span className="text-sm mb-2 font-medium">Continue the story</span>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
            <ChevronDown className="h-6 w-6" />
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Cinematic overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </section>
  )
}
