export default function Skills() {
  const skills = [
    "IT Support & Troubleshooting",
    "Computer Networking",
    "HTML, CSS, PHP, Laravel, MySQL",
    "Instalasi & Maintenance Software",
    "Inventory System",
    "Google Workspace / Microsoft Office"
  ]

  const AdditionalInfo =[
    "Available for WFO, Hybrid, or Remote roles",
    "Fast learner and highly adaptable in dynamic environments",
    "Ready to contribute in IT Support or Junior Web Developer roles"
  ]
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Skill & Tools</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-8">Additional Info</h2>
      <ul className="list-disc pl-5">
        {AdditionalInfo.map((AdditionalInfo, a) => (
          <li key={a}>{AdditionalInfo}</li>
        ))}
      </ul>
    </section>
  )
}
