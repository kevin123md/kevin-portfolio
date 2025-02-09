import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-deep-blue text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image src="/pictures/images.jpg" alt="Kevin MD" width={300} height={300} className="rounded-full mx-auto" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Kevin MD</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-accent-teal">Data Analyst & Visualization Specialist</h2>
          <p className="text-xl mb-8">Transforming Data into Actionable Insights</p>
          <div className="space-x-4">
            <Button variant="outline" className="bg-white text-deep-blue hover:bg-accent-teal hover:text-white">
              View Portfolio
            </Button>
            <Button variant="outline" className="bg-white text-deep-blue hover:bg-accent-teal hover:text-white">
              Download Resume
            </Button>
            <Button variant="outline" className="bg-white text-deep-blue hover:bg-accent-teal hover:text-white">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

