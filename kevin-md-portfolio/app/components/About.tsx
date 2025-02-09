export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-deep-blue">About Me</h2>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          I'm a Data Analyst passionate about transforming complex datasets into clear, actionable insights. With
          expertise in data visualization and business intelligence, I help organizations make data-driven decisions
          that drive growth and efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Data Visualization",
            "Statistical Analysis",
            "Business Intelligence",
            "Dashboard Development",
            "Data-Driven Storytelling",
          ].map((skill, index) => (
            <div key={index} className="bg-neutral-100 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-deep-blue">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

