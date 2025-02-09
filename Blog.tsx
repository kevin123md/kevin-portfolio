import { Button } from "@/components/ui/button"

const blogPosts = [
  "Leveraging Data for Business Growth",
  "Best Practices in Dashboard Design",
  "The Future of Data Analytics",
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-deep-blue">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-deep-blue">{post}</h3>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

