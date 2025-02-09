export default function Skills() {
  const skillCategories = [
    { name: "Programming", skills: ["Python", "SQL", "R"] },
    { name: "Visualization Tools", skills: ["Tableau", "Power BI"] },
    { name: "Business Tools", skills: ["Excel", "Google Analytics"] },
    { name: "Other", skills: ["Git", "AWS", "Docker"] },
  ]

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-deep-blue">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-deep-blue">{category.name}</h3>
              <ul className="list-disc list-inside">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-accent-teal">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

