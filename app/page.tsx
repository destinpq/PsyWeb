import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Accomplishments } from "@/components/accomplishments"
import { BlogPreview } from "@/components/blog-preview"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Accomplishments />
      <BlogPreview />
      <Contact />
    </main>
  )
}
