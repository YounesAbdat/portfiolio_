"use client"

import { useEffect, useRef } from "react"

const clients = [
  {
    name: "TechCorp",
    logo: "/cse.png",
  },
  {
    name: "TechCorp",
    logo: "/cse.png",
  },
  {
    name: "TechCorp",
    logo: "/cse.png",
  },
  {
    name: "TechCorp",
    logo: "/cse.png",
  },
  
]

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cinematic-text text-4xl md:text-5xl mb-6 text-white">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            Collaborating with brands and creators to bring their visions to life
          </p>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden whitespace-nowrap"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-card/20 rounded-lg border border-border/30 smooth-transition hover:bg-card/40 hover:border-primary/30"
              >
                <img
                  src={client.logo || `/placeholder.svg?height=60&width=120&text=${client.name}`}
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-12 object-contain opacity-70 hover:opacity-100 smooth-transition filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-card/20 rounded-lg border border-border/30 smooth-transition hover:bg-card/40 hover:border-primary/30"
              >
                <img
                  src={client.logo || `/placeholder.svg?height=60&width=120&text=${client.name}`}
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-12 object-contain opacity-70 hover:opacity-100 smooth-transition filter brightness-0 invert"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Client testimonials or stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="cinematic-text text-3xl text-primary">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="cinematic-text text-3xl text-primary">25+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="cinematic-text text-3xl text-primary">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
