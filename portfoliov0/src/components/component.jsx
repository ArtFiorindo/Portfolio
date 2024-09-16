import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Linkedin, Github } from "lucide-react"
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaCss3Alt, FaJsSquare, FaBootstrap } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiSpringboot, SiTypescript, SiGithub } from "react-icons/si"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <Link href="#" className="flex items-center justify-center">
          <span className="sr-only">Artur L Fiorindo</span>
        </Link>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Artur L Fiorindo</h1>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Desenvolvedor</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto text-justify">
                    Olá, sou Artur Fiorindo, estudante de Análise e Desenvolvimento de Sistemas, em busca da minha primeira experiência profissional. 
                    Tenho uma paixão tanto por front-end quanto por back-end, e tenho trabalhado em diversos projetos acadêmicos que incluem colaborações 
                    com a SalesForce e a NotreDame Intermédica. Estou entusiasmado para aplicar meus conhecimentos e habilidades em um 
                    ambiente profissional e contribuir para projetos inovadores.
                  </p>
                  <div className="flex items-center justify-center space-x-6 mt-4 mb-7">
                    <Link href="https://www.linkedin.com/in/artur-fiorindo-0404b2288/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-8 w-8 text-blue-700 hover:text-blue-900" />
                    </Link>
                    <Link href="https://github.com/ArtFiorindo" target="_blank" rel="noopener noreferrer">
                      <Github className="h-8 w-8 text-purple-700 hover:text-purple-900" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Confira alguns dos meus projetos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card>
  <CardHeader>
    <img
      src="/placeholder.svg?height=310&width=550"
      width={550}
      height={310}
      alt="Project 1"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
  </CardHeader>
  <CardContent className="space-y-2">
    <h3 className="text-xl font-bold">Sistema de Biblioteca</h3>
    <p className="text-muted-foreground">
      A Biblioteca API REST é uma aplicação desenvolvida em Spring Boot que fornece um sistema robusto para o gerenciamento de livros em uma biblioteca.
    </p>
    <div className="flex justify-center gap-2">
      <Link
        href="https://github.com/ArtFiorindo/ApiSistemaBiblioteca" target="_blank"
        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-purple-600 hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Link>
    </div>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <img
      src="/placeholder.svg?height=310&width=550"
      width={550}
      height={310}
      alt="Project 2"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
  </CardHeader>
  <CardContent className="space-y-2">
    <h3 className="text-xl font-bold">BlinCo</h3>
    <p className="text-muted-foreground">
      Projeto feito para fins acadêmicos em conjunto com a empresa SalesForce. O projeto foi feito por um grupo de 3 pessoas que foram, Artur Fiorindo, Eduardo Função e Jhoe Hashimoto. O desafio proposto foi de aumentar a acessibilidade do portal da SalesForce, diante desse desafio optamos por implementar uma função para pessoas Daltônicas.
    </p>
    <div className="flex justify-center gap-2">
      <Link
        href="https://github.com/eduardofuncao/BlindCo" target="_blank"
        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-purple-600 hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Link>
    </div>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <img
      src="/placeholder.svg?height=310&width=550"
      width={550}
      height={310}
      alt="Project 3"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
  </CardHeader>
  <CardContent className="space-y-2">
    <h3 className="text-xl font-bold">Sistema de Reserva de Salas</h3>
    <p className="text-muted-foreground">O Sistema de Reserva de Salas é uma aplicação desenvolvida em Spring Boot para o gerenciamento de salas de reunião. A API permite criar, listar, e gerenciar salas de reunião e suas reservas.</p>
    <div className="flex justify-center gap-2">
      <Link
        href="https://github.com/ArtFiorindo/ApiReservadeSalas" target="blank"
        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-purple-600 hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Link>
    </div>
  </CardContent>
</Card>

            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Habilidades</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Aqui estão algumas tecnologias nas quais sou proficiente:
                </p>
                <div className="grid grid-cols-5 gap-4 p-4">
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <FaReact size={40} className="text-blue-500 mx-auto" />
                    <p className="text-center mt-2">React</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <FaNodeJs size={40} className="text-green-500 mx-auto" />
                    <p className="text-center mt-2">Node.js</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <FaJava size={40} className="text-red-500 mx-auto" />
                    <p className="text-center mt-2">Java</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <SiNextdotjs size={40} className="text-black mx-auto" />
                    <p className="text-center mt-2">Next.js</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <SiTailwindcss size={40} className="text-blue-400 mx-auto" />
                    <p className="text-center mt-2">Tailwind CSS</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <SiSpringboot size={40} className="text-green-600 mx-auto" />
                    <p className="text-center mt-2">Spring Boot</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <SiTypescript size={40} className="text-blue-600 mx-auto" />
                    <p className="text-center mt-2">TypeScript</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <FaDatabase size={40} className="text-yellow-500 mx-auto" />
                    <p className="text-center mt-2">Databases</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <FaCss3Alt size={40} className="text-blue-600 mx-auto" />
                    <p className="text-center mt-2">CSS3</p>
                  </div>
                  <div className="bg-zinc-700 p-4 rounded-lg shadow-md">
                    <FaJsSquare size={40} className="text-yellow-400 mx-auto" />
                    <p className="text-center mt-2">JavaScript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-12 text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <p className="text-sm leading-loose">
            © 2024 Artur Lopes Fiorindo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}