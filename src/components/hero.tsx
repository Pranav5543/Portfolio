import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-center"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          src="https://www.dropbox.com/scl/fi/1ncpeggeu1u6vialelcjl/12817768_3840_2160_30fps.mp4?rlkey=gwxi00p5zc6bp0pgxuj3dcl5z&st=kv3qp0gw&raw=1"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        <div className="space-y-6">
          <p className="font-medium text-accent text-xl">Nuthi Pranav</p>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Full-Stack Developer Crafting Digital Experiences
          </h1>
          <p className="text-lg text-muted-foreground">
            I build and scale web applications with a focus on clean code, user-centric design, and robust performance.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
