import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-deep-blue">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full bg-deep-blue text-white hover:bg-accent-teal">
              Send Message
            </Button>
          </form>
          <div className="mt-8 text-center">
            <p className="mb-2">
              Email:{" "}
              <a href="mailto:contact@kevinmd.com" className="text-accent-teal">
                contact@kevinmd.com
              </a>
            </p>
            <p className="mb-2">
              LinkedIn:{" "}
              <a href="#" className="text-accent-teal">
                Kevin MD
              </a>
            </p>
            <p className="mb-2">
              GitHub:{" "}
              <a href="#" className="text-accent-teal">
                mclekvn
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a href="#" className="text-accent-teal">
                @mclekvn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

