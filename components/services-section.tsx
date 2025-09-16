"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Film, Scissors, Mic, Play, X } from "lucide-react"

const services = [
	{
		id: "video-editing",
		title: "Video Editing",
		icon: Scissors,
		description: "Professional video editing with cinematic flair",
		longDescription:
			"Transform raw footage into compelling stories with advanced editing techniques, color grading, and seamless transitions.",
		videos: [
			{
				id: 1,
				title: "Commercial Edit",
				thumbnail: "/commercial-video-editing-thumbnail.jpg",
				videoUrl: "/placeholder.mp4?height=720&width=1280&query=commercial video editing sample",
			},
			{
				id: 2,
				title: "Documentary Style",
				thumbnail: "/documentary-editing-thumbnail.jpg",
				videoUrl: "/placeholder.mp4?height=720&width=1280&query=documentary editing sample",
			},
			{
				id: 3,
				title: "Music Video",
				thumbnail: "/music-video-editing-thumbnail.jpg",
				videoUrl: "/placeholder.mp4?height=720&width=1280&query=music video editing sample",
			},
		],
	},
	{
		id: "filmmaking",
		title: "Filmmaking & Directing",
		icon: Film,
		description: "Complete filmmaking services from concept to delivery",
		longDescription:
			"Full-service filmmaking including pre-production planning, directing, cinematography, and post-production.",
		videos: [
			{
				id: 4,
				title: "Short Film Teaser",
				thumbnail: "/short-film-directing-thumbnail.jpg",
				videoUrl: "https://www.instagram.com/reel/DIosF7NITYN/?utm_source=ig_web_copy_link&igsh=c2FpN3pyazYwM2Ni",
			},
			{
				id: 5,
				title: "Event recap video",
				thumbnail: "/behind-the-scenes-filmmaking-thumbnail.jpg",
				videoUrl: "https://www.instagram.com/reel/DJkIEAkI_mE/?utm_source=ig_web_copy_link&igsh=MXZraXphazM4azdrcg==",
			},
			{
				id: 6,
				title: "Corporate Video",
				thumbnail: "/corporate-filmmaking-thumbnail.jpg",
				videoUrl: "https://www.instagram.com/reel/DKxX0wjI-gI/?utm_source=ig_web_copy_link&igsh=MWFvZThndTZnMGZheg==",
			},
		],
	},
	{
		id: "voice-over",
		title: "Voice-over",
		icon: Mic,
		description: "Professional voice-over for all types of content",
		longDescription:
			"Versatile voice-over services for commercials, documentaries, narrations, and promotional content.",
		audioSamples: [
			{
				id: 1,
				title: "Who am I? | من أكون؟",
				description: "Introductory Recording for My Voice Services – Younes Voice",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379764/jfaqqsd1a1wd2vocabxl.mp3",
			},
			{
				id: 2,
				title: "Hear My Voice in Various Fields | استمع إلى صوتي في مختلف المجالات",
				description: "Seven Diverse Voice-Over Scripts.",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379759/itxnxsltk6eamqpely5l.mp3",
			},
			{
				id: 3,
				title: "Almaali association for science and education | جمعية المعالي للعلوم والتربية",
				description: "An audio for a descriptif video for Almaali association for science and education",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379761/wgmhgcp0pyeissu34l8n.mp3",
			},

			{
				id: 4,
				title: "NBQ foundaction|مؤسسة النهضة بالقران الكريم ",
				description: "The Annual Report of the Revival with the Holy Quran Foundation.",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379765/gak3ouogasumyufjx78e.wav",
			},

			{
				id: 5,
				title: "Completing 7 Voice-Over Scripts in One Hour | انجاز سبع نصوص تعليق صوتي في ساعة",
				description: "The Challenge of Completing Seven Voice-Over Scripts in One Hour",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379762/q6d3yqcexcxj5brtwrts.mp3",
			},
			{
				id: 6,
				title: "The dark-web | الأنترنت المظلم ",
				description: "Nature documentary narration showcasing wildlife in their natural habitat.",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379764/slht8rayxnttm3jnljpi.mp3",
			},
			{
				id: 7,
				title: "بعيدًّا عن النوافذ والشرف ",
				description: "A Voice Recording Praising the Role of Doctors, Especially During the Time of the Coronavirus Pandemic",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379760/xrqcvwcoa9wnp3vxijhz.mp3",
			},
			{
				id: 8,
				title: "قالوا!",
				description: "Motivational Voice Recording.",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379770/aipoumeanlc0xxwxwmlj.wav",
			},

			{
				id: 9,
				title: "Save Gaza| أنقذوا غزة",
				description: "A Voice Recording for Our Brothers in Gaza.",
				audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379761/wl4mz51u5wxgknrg6sn3.mp3",
			},
		],
	},
]

export default function ServicesSection() {
	const [selectedService, setSelectedService] = useState<string | null>(null)
	const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
	const [playingAudio, setPlayingAudio] = useState<string | null>(null)

	const currentService = services.find((s) => s.id === selectedService)

	const playAudio = (audioUrl: string, audioId: string) => {
		// Stop any currently playing audio
		if (playingAudio) {
			const currentAudio = document.getElementById(playingAudio) as HTMLAudioElement
			if (currentAudio) {
				currentAudio.pause()
				currentAudio.currentTime = 0
			}
		}

		const audio = document.getElementById(audioId) as HTMLAudioElement
		if (audio) {
			if (playingAudio === audioId) {
				audio.pause()
				setPlayingAudio(null)
			} else {
				audio.play()
				setPlayingAudio(audioId)
				audio.onended = () => setPlayingAudio(null)
			}
		}
	}

	return (
		<section className="py-20 px-4 relative">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="cinematic-text text-4xl md:text-5xl mb-6 text-white">
						My <span className="text-primary">Services</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
						Comprehensive creative services to bring your vision to life
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service) => (
						<Card
							key={service.id}
							className="bg-card/30 border-border/30 backdrop-blur-sm p-6 smooth-transition hover:bg-card/50 hover:border-primary/50 cursor-pointer group"
							onClick={() => setSelectedService(service.id)}
						>
							<div className="text-center">
								<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 smooth-transition">
									<service.icon className="h-8 w-8 text-primary" />
								</div>
								<h3 className="cinematic-text text-2xl mb-3 text-white">{service.title}</h3>
								<p className="text-gray-400 mb-6">{service.description}</p>
								<Button
									variant="outline"
									className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
								>
									View Gallery
								</Button>
							</div>
						</Card>
					))}
				</div>

				{/* Service Modal */}
				<Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
					<DialogContent className="max-w-4xl bg-background border-border">
						<DialogHeader>
							<DialogTitle className="cinematic-text text-3xl text-white flex items-center gap-3">
								{currentService && <currentService.icon className="h-8 w-8 text-primary" />}
								{currentService?.title}
							</DialogTitle>
							<p className="text-gray-400 text-lg">{currentService?.longDescription}</p>
						</DialogHeader>

						<div className="mt-6">
							{currentService?.id === "voice-over" ? (
								<div className="space-y-4">
									<h4 className="text-xl font-semibold text-white mb-4">Audio Samples</h4>
									{currentService.audioSamples?.map((sample) => (
										<Card key={sample.id} className="bg-card/50 border-border/30 p-4">
											<div className="flex items-center justify-between">
												<div>
													<h5 className="font-semibold text-white">{sample.title}</h5>
													<p className="text-gray-400 text-sm">{sample.description}</p>
												</div>
												<Button
													onClick={() => playAudio(sample.audioUrl, `audio-${sample.id}`)}
													variant={playingAudio === `audio-${sample.id}` ? "default" : "outline"}
													size="sm"
												>
													<Play className="h-4 w-4 mr-2" />
													{playingAudio === `audio-${sample.id}` ? "Playing" : "Play"}
												</Button>
											</div>
											<audio id={`audio-${sample.id}`} src={sample.audioUrl} />
										</Card>
									))}
								</div>
							) : (
								<div className="grid md:grid-cols-3 gap-4">
									{currentService?.videos?.map((video) => (
										<a
											key={video.id}
											href={video.videoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="relative cursor-pointer group block"
										>
											<img
												src={video.thumbnail || "/placeholder.svg"}
												alt={video.title}
												className="w-full h-48 object-cover rounded-lg"
											/>
											<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 smooth-transition rounded-lg flex items-center justify-center">
												<Play className="h-12 w-12 text-primary" />
											</div>
											<h5 className="text-white font-semibold mt-2">{video.title}</h5>
										</a>
									))}
								</div>
							)}
						</div>
					</DialogContent>
				</Dialog>

				{/* Video Modal */}
				<Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
					<DialogContent className="max-w-4xl bg-black border-none p-0">
						<div className="relative">
							<Button
								onClick={() => setSelectedVideo(null)}
								variant="ghost"
								size="sm"
								className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
							>
								<X className="h-4 w-4" />
							</Button>
							{selectedVideo && <video src={selectedVideo} controls autoPlay className="w-full h-auto rounded-lg" />}
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</section>
	)
}
