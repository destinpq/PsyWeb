import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Accomplishments } from "@/components/accomplishments"
import { BlogPreview } from "@/components/blog-preview"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Accomplishments />
      <BlogPreview />
      <Contact />
    </main>
  )
}
