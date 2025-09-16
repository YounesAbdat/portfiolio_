"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Play, X, Calendar, Clock, Film } from "lucide-react"

const portfolioProjects = [
  {
    id: 1,
    title: "Brand Commercial",
    category: "Commercial",
    thumbnail: "/brand-commercial-portfolio-thumbnail.jpg",
    videoUrl: "/placeholder.mp4?height=720&width=1280&query=brand commercial video",
    description: "A high-energy commercial for a tech startup featuring dynamic transitions and modern aesthetics.",
    duration: "1:30",
    year: "2024",
    tags: ["Commercial", "Tech", "Motion Graphics"],
  },
  {
    id: 2,
    title: "Documentary Feature",
    category: "Documentary",
    thumbnail: "/documentary-feature-portfolio-thumbnail.jpg",
    videoUrl: "/placeholder.mp4?height=720&width=1280&query=documentary feature film",
    description:
      "An intimate documentary exploring local artisans and their craft, featuring natural lighting and authentic storytelling.",
    duration: "45:00",
    year: "2023",
    tags: ["Documentary", "Artisan", "Storytelling"],
  },
  {
    id: 3,
    title: "Music Video",
    category: "Music Video",
    thumbnail: "/music-video-portfolio-thumbnail.jpg",
    videoUrl: "/placeholder.mp4?height=720&width=1280&query=music video production",
    description: "A visually striking music video with synchronized editing and creative visual effects.",
    duration: "3:45",
    year: "2024",
    tags: ["Music Video", "VFX", "Creative"],
  },
  {
    id: 4,
    title: "Corporate Training",
    category: "Corporate",
    thumbnail: "/corporate-training-portfolio-thumbnail.jpg",
    videoUrl: "/placeholder.mp4?height=720&width=1280&query=corporate training video",
    description: "Professional training video series with clear instructional design and engaging visuals.",
    duration: "12:30",
    year: "2023",
    tags: ["Corporate", "Training", "Educational"],
  },
  {
    id: 5,
    title: "Short Film",
    category: "Film",
    thumbnail: "/short-film-portfolio-thumbnail.jpg",
    videoUrl: "/placeholder.mp4?height=720&width=1280&query=short film production",
    description: "Award-winning short film exploring themes of connection and isolation in modern society.",
    duration: "18:20",
    year: "2024",
    tags: ["Short Film", "Drama", "Award Winner"],
  },
  {
    id: 6,
    title: "Event Highlight",
    category: "Event",
    thumbnail: "/event-highlight-portfolio-thumbnail.jpg",
    videoUrl: "/placeholder.mp4?height=720&width=1280&query=event highlight reel",
    description: "Dynamic event highlight reel capturing the energy and excitement of a major conference.",
    duration: "5:15",
    year: "2024",
    tags: ["Event", "Conference", "Highlight Reel"],
  },
]

const categories = ["All", "Commercial", "Documentary", "Music Video", "Corporate", "Film", "Event"]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioProjects)[0] | null>(null)

  const filteredProjects = portfolioProjects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  return (
    <section id="portfolio" className="py-20 px-4 relative">
      <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-primary/20 to-transparent opacity-30">
        <div className="flex flex-col h-full justify-evenly">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-primary/40 rounded-sm mx-2" />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-30">
        <div className="flex flex-col h-full justify-evenly">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-primary/40 rounded-sm mx-2" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Film className="h-8 w-8 text-primary" />
            <h2 className="cinematic-text text-4xl md:text-5xl text-white">
              My <span className="text-primary">Story Reel</span>
            </h2>
            <Film className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            Each frame tells a story. Every cut serves a purpose. Welcome to my cinematic journey.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-2 border-primary"
                    : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent border-2"
                }
              >
                {category}
              </Button>
            ))}
          </div>
          {/* Film strip line decoration */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 -z-10" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-card/30 border-2 border-primary/20 backdrop-blur-sm overflow-hidden smooth-transition hover:bg-card/50 hover:border-primary/70 cursor-pointer group relative"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Film frame perforations */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-primary/10 flex flex-col justify-evenly z-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary/30 rounded-full mx-auto" />
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-primary/10 flex flex-col justify-evenly z-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary/30 rounded-full mx-auto" />
                ))}
              </div>

              <div className="relative ml-4 mr-4">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-primary mx-auto mb-2" />
                    <span className="text-white text-sm font-medium">Play Story</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-black/70 text-white border border-primary/30">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6 ml-4 mr-4">
                <h3 className="cinematic-text text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl bg-background border-border p-0">
            {selectedProject && (
              <div>
                {/* Video Section */}
                <div className="relative">
                  <Button
                    onClick={() => setSelectedProject(null)}
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <video
                    src={selectedProject.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[60vh] bg-black"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="cinematic-text text-2xl text-white mb-2">{selectedProject.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {selectedProject.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {selectedProject.year}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {selectedProject.category}
                    </Badge>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted/30 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
