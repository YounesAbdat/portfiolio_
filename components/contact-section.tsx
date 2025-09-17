"use client"

import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, Instagram, Linkedin, Phone } from "lucide-react"

export default function ContactSection() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: Phone,
      href: "https://wa.me/qr/LVSNH2GBUKEPG1",
      color: "hover:text-green-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "younesabdat2@gmail.com",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/younes-abdat-5618162b9/",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/younes.abdt/",
      color: "hover:text-pink-400",
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cinematic-text text-4xl md:text-5xl mb-6 text-white">
            Let's <span className="text-primary">Create Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            Ready to bring your vision to life? Get in touch and let's start your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Background Image */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-8">
            <img
              src="/2.png"
              alt="Studio setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="cinematic-text text-2xl text-white">Get in Touch</h4>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h4 className="cinematic-text text-xl text-white text-center">Connect With Me</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-3 p-6 bg-card/20 border border-border/30 rounded-lg smooth-transition hover:bg-card/40 hover:border-primary/50 text-gray-300 ${link.color}`}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="font-medium text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <Card className="bg-card/20 border-border/30 p-6 mt-8">
            <h4 className="cinematic-text text-lg text-white mb-4 text-center">Quick Info</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <div className="text-center">
                <div className="text-primary font-medium">Within 24 hours</div>
                <div>Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-medium">1-4 weeks</div>
                <div>Project Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-medium">Free initial call</div>
                <div>Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-medium">Remote & On-site</div>
                <div>Location</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}