import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Sales Analytics Dashboard",
    description: "Interactive dashboard analyzing sales trends",
    tools: "Tableau, SQL",
    link: "#",
    image: "/images/projects/sales-dashboard.jpg",
  },
  {
    title: "Customer Segmentation Analysis",
    description: "ML-based customer clustering",
    tools: "Python, scikit-learn",
    link: "#",
    image: "/images/projects/segmentation.jpg",
  },
  {
    title: "Revenue Forecasting Model",
    description: "Time series analysis for revenue prediction",
    tools: "Python, Prophet",
    link: "#",
    image: "/images/projects/forecasting.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-deep-blue">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-neutral-50 rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-deep-blue">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-accent-teal mb-4">{project.tools}</p>
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

