import { Code, Database, Smartphone, Component, Server } from 'lucide-react'
import { Section } from "@/components/section"
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const skills = [
  { name: 'HTML', icon: <Code className="h-8 w-8 text-accent" /> },
  { name: 'CSS', icon: <Code className="h-8 w-8 text-accent" /> },
  { name: 'JavaScript', icon: <Code className="h-8 w-8 text-accent" /> },
  { name: 'React', icon: <Component className="h-8 w-8 text-accent" /> },
  { name: 'Next.js', icon: <Component className="h-8 w-8 text-accent" /> },
  { name: 'Node.js', icon: <Server className="h-8 w-8 text-accent" /> },
  { name: 'Express', icon: <Server className="h-8 w-8 text-accent" /> },
  { name: 'MongoDB', icon: <Database className="h-8 w-8 text-accent" /> },
  { name: 'Tailwind CSS', icon: <Code className="h-8 w-8 text-accent" /> },
  { name: 'Responsive Design', icon: <Smartphone className="h-8 w-8 text-accent" /> },
]

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary">
      <div className="text-center">
        <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
          Technical Skills
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          A look at the technologies I work with.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="p-0">
              {skill.icon}
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <p className="font-medium">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
