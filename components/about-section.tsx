"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Award, Camera, Film, Mic } from "lucide-react"

const milestones = [
  {
    year: "2018",
    title: "Started Filmmaking Journey",
    description: "Began creating short films and documentaries",
    icon: Camera,
  },
  {
    year: "2021",
    title: "Professional Video Editor",
    description: "Transitioned to full-time video editing",
    icon: Film,
  },
  {
    year: "2022",
    title: "Started voice acting jorney",
    description: "Won Best Editing at Regional Film Festival",
    icon: Mic,
  },
  {
    year: "2024",
    title: "Production Expansion",
    description: "Launched full-service production studio",
    icon: Calendar,
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/professional-filmmaker-portrait-with-dramatic-cine.jpg"
                alt="Professional portrait"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-lg opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-secondary rounded-lg opacity-40" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="cinematic-text text-4xl md:text-5xl mb-6 text-white">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  With a sharp eye for detail and a passion for storytelling, 
                  I craft cinematic experiences that blend creativity with precision.
          
                </p>
                <p>
                 My work spans video editing, directing, and Arabic voice-over,
                  allowing me to shape both the visuals and the sound of every project
                </p>
                <p>
                 From dynamic event coverage to emotionally charged narratives, 
                 I bring a professional, polished touch that turns ideas into unforgettable content.
                  Every frame, every cut, and every word I deliver is driven by one mission: to connect with audiences and leave a lasting impact.
                </p>
              </div>
            </div>

            {/* Film Strip Timeline */}
            <div className="space-y-6">
              <h3 className="cinematic-text text-2xl text-primary mb-4">Journey Milestones</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border/30 backdrop-blur-sm p-4 smooth-transition hover:bg-card/70 hover:border-primary/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <milestone.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary font-bold text-lg">{milestone.year}</span>
                          <div className="h-px bg-primary/30 flex-1" />
                        </div>
                        <h4 className="text-white font-semibold mb-1">{milestone.title}</h4>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
