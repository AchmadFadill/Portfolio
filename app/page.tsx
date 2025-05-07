import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Twitter, ExternalLink, Code, Briefcase, User, ChevronRight } from "lucide-react"

export default function DeveloperLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between py-4 px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-teal-500" />
            <span className="font-bold">AchmadF</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-teal-400">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-teal-400">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-teal-400">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-teal-400">
              Contact
            </Link>
          </nav>
          <Button
            className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 h-10 rounded-md shadow-lg shadow-teal-900/20 transition-all duration-200 hover:shadow-teal-800/30 hover:translate-y-[-2px]"
            asChild
          >
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container py-20 md:py-32 px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <Badge className="inline-block bg-teal-900/50 text-teal-400 hover:bg-teal-900 border-teal-800 px-4 py-1 text-sm">
                  Available for hire
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">FrontEnd Developer</h1>
                <p className="text-xl text-gray-300">I build modern web applications with cutting-edge technologies</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 h-12 rounded-md shadow-lg shadow-teal-900/20 transition-all duration-200 hover:shadow-teal-800/30 hover:translate-y-[-2px]"
                  asChild
                >
                  <Link href="#projects" className="flex items-center justify-center">
                    View Projects <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-teal-700 text-teal-400 hover:bg-teal-900/50 hover:text-teal-300 px-6 py-3 h-12 rounded-md transition-all duration-200 hover:border-teal-600"
                  asChild
                >
                  <Link href="#contact" className="flex items-center justify-center">
                    Contact Me
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <Link href="https://github.com/AchmadFadill" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-gray-400 hover:text-teal-400 transition-colors" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/achmad-fadillah-a75244316"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-gray-400 hover:text-teal-400 transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-gray-400 hover:text-teal-400 transition-colors" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-teal-900/50 bg-gray-900 shadow-xl shadow-teal-900/20">
                <Image
                  src="/images/profile.jpeg"
                  width={320}
                  height={320}
                  alt="Developer portrait at Mount Rinjani summit"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-900 py-20 md:py-32 px-4 md:px-6">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <User className="mx-auto h-10 w-10 text-teal-500 mb-6" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h2>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                I'm a junior developer starting my career in the programming world. I focus on building foundational
                skills, working on small projects to deepen my understanding of programming logic and technology. I'm
                also learning best practices to become a better developer and continually improve.
              </p>
              {/* <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or hiking mountains. I've conquered Mount Rinjani at 3,726 meters above sea level and enjoy outdoor
                adventures.
              </p> */}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-black py-20 md:py-32 px-4 md:px-6">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Skills & Technologies
              </h2>
              <p className="mt-4 text-lg text-gray-300">Here are some of the technologies and tools I work with</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {["JavaScript", "HTML", "CSS", "Tailwind CSS", "Git", "Laravel"].map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-teal-900/50 bg-gray-900 p-5 text-white shadow-md hover:border-teal-700 hover:shadow-teal-900/20 transition-all duration-200"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gray-900 py-20 md:py-32 px-4 md:px-6">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Briefcase className="mx-auto h-10 w-10 text-teal-500 mb-6" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Featured Projects</h2>
              <p className="mt-4 text-lg text-gray-300">Check out some of my recent work</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Hadirin - Presensi Pegawai",
                  description:
                    "Sistem presensi pegawai berbasis web menggunakan Filament. Memudahkan pencatatan kehadiran dan laporan kehadiran dengan fitur lengkap.",
                  tags: ["Laravel", "Filament", "PHP", "MySQL", "Tailwind CSS"],
                  image: "/images/hadirin-project.png",
                },
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-featured online store with payment processing, inventory management, and admin dashboard.",
                  tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Task Management App",
                  description:
                    "A collaborative task management application with real-time updates and team collaboration features.",
                  tags: ["React", "Firebase", "Redux", "Material UI"],
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-gray-900 border-2 border-teal-900/50 text-white hover:border-teal-800 transition-all duration-200 shadow-lg hover:shadow-teal-900/20"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="px-6 pt-6 pb-4">
                    <CardTitle className="text-teal-50 text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300 mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-teal-900/50 text-teal-300 hover:bg-teal-900 border-teal-800 px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 py-6 pt-2">
                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 h-12 rounded-md shadow-lg shadow-teal-900/20 transition-all duration-200 hover:shadow-teal-800/30 hover:translate-y-[-2px]"
                      asChild
                    >
                      <Link href="#" className="flex items-center justify-center">
                        View Project <ExternalLink className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button
                variant="outline"
                className="border-2 border-teal-700 text-teal-400 hover:bg-teal-900/50 hover:text-teal-300 px-6 py-3 h-12 rounded-md transition-all duration-200 hover:border-teal-600"
                asChild
              >
                <Link
                  href="https://github.com/AchmadFadill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  View More on GitHub <Github className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-black py-20 md:py-32 px-4 md:px-6">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Mail className="mx-auto h-10 w-10 text-teal-500 mb-6" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Get In Touch</h2>
              <p className="mt-4 text-lg text-gray-300">Interested in working together? Feel free to reach out!</p>
            </div>
            <div className="mx-auto max-w-lg">
              <Card className="bg-gray-900 border-2 border-teal-900/50 text-white shadow-xl">
                <CardHeader className="px-8 pt-8 pb-4">
                  <CardTitle className="text-teal-50 text-2xl">Contact AchmadF</CardTitle>
                  <CardDescription className="text-gray-300 mt-2">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 py-6">
                  <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-12 w-full rounded-md border-2 border-teal-900 bg-gray-800 px-4 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-12 w-full rounded-md border-2 border-teal-900 bg-gray-800 px-4 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-12 w-full rounded-md border-2 border-teal-900 bg-gray-800 px-4 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="achmad@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[150px] w-full rounded-md border-2 border-teal-900 bg-gray-800 px-4 py-3 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="px-8 py-8 pt-4">
                  <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 h-12 rounded-md shadow-lg shadow-teal-900/20 transition-all duration-200 hover:shadow-teal-800/30 hover:translate-y-[-2px]">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">
                  Prefer email? Reach AchmadF directly at{" "}
                  <Link
                    href="mailto:ahmadfadillah12222@gmail.com"
                    className="font-medium underline underline-offset-4 text-teal-400 hover:text-teal-300"
                  >
                    ahmadfadillah12222@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-8 md:py-10 px-4 md:px-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-teal-500" />
            <span className="text-sm font-medium">AchmadF</span>
          </div>
          <p className="text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} AchmadF. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://github.com/AchmadFadill" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-400 hover:text-teal-400 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/achmad-fadillah-a75244316"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-teal-400 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-teal-400 transition-colors" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:ahmadfadillah12222@gmail.com">
              <Mail className="h-5 w-5 text-gray-400 hover:text-teal-400 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
