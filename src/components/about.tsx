import Image from "next/image"
import { Section } from "@/components/section"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-1 flex justify-center lg:order-1">
            <Card className="w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] lg:w-[400px] lg:h-[450px] overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2">
                <Image
                src="https://www.dropbox.com/scl/fi/t5gzq0n8fpmbo5l0lvbwl/photo-2.jpg?rlkey=mc9vje3lmgxntkllhboyyfprj&st=pdlau1ez&raw=1"
                alt="Pranav Nuthi"
                width={400}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="professional portrait"
                />
            </Card>
        </div>
        <div className="order-2 lg:order-2">
          <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
            About Me
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            I'm a passionate Full-Stack Developer with a knack for turning complex problems into elegant, user-friendly solutions. My journey in web development started with a simple curiosity for how things work on the internet, which has grown into a full-fledged passion for building beautiful and functional applications.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            With experience in both front-end and back-end technologies, I enjoy every aspect of the development process, from a project's initial concept to its final deployment. I'm always eager to learn new technologies and improve my craft.
          </p>
        </div>
      </div>
    </Section>
  )
}
