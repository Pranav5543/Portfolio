import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import { Section } from "@/components/section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const projects = [
  {
    title: "Food-Del: Online Food Ordering Platform",
    description: "Built a food delivery web app with separate user and admin interfaces, improving user management efficiency. Developed a React.js SPA with dynamic routing and real-time cart updates.",
    image: "https://www.dropbox.com/scl/fi/phkuiag2f83zi878othyc/food-del-image.png?rlkey=bjefnfwkifynien7mxqvw655b&st=dijr1t0e&raw=1",
    imageHint: "food delivery",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Render"],
    liveUrl: "https://food-del-frontend-g7aq.onrender.com",
    githubUrl: "https://github.com/Pranav5543/food-del.git",
  },
  {
    title: "NXTWATCH: A YouTube Alternative",
    description: "A full-stack video streaming platform with category-based browsing, a customizable dark/light theme, and secure JWT authentication for a personalized user experience.",
    image: "https://www.dropbox.com/scl/fi/nuhpuckb87kbvmc443eiw/nxtwatch-light.gif?rlkey=vovvqijj06d7hemnypw262ajc&st=x2stokjm&raw=1",
    imageHint: "video streaming platform",
    tags: ["React.js", "HTML", "CSS", "Bootstrap", "JWT"],
    liveUrl: "https://pranav23.ccbp.tech",
    githubUrl: "https://github.com/Pranav5543/Nxtwatch-U.git",
  },
  {
    title: "Virtual Desktop Assistant",
    description: "An intelligent voice-controlled assistant built with Python to automate desktop tasks like opening apps, fetching news, and answering queries using various web APIs.",
    image: "https://www.dropbox.com/scl/fi/r4up6hrv0qj7on2vmp8d7/virtual-desktop-assistant.jpeg?rlkey=fxwtok1jgkhq222oolh7c0gc4&st=as69uw9a&raw=1",
    imageHint: "voice assistant code",
    tags: ["Python", "SpeechRecognition", "Automation", "pyttsx3"],
    liveUrl: null,
    githubUrl: "https://github.com/Pranav5543/VDA-Mini_Project.git",
  },
]

export function Projects() {
  return (
    <Section id="projects">
      <div className="text-center">
        <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
          My Work
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mt-12"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader>
                    <div className="aspect-video relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4 p-6">
                      <CardTitle className="font-headline text-lg md:text-xl">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex w-full justify-start gap-4">
                      <Button asChild variant="outline">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4" /> Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  )
}
