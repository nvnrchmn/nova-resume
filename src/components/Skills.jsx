export default function Skills() {
  const skills = [
    "IT Support & Troubleshooting",
    "Computer Networking",
    "HTML",
    "CSS",
    "PHP",
    "Laravel",
    "MySQL",
    "Instalasi & Maintenance Software",
    "Inventory System",
    "Google Workspace",
    "Microsoft Office"
  ];

  const additionalInfo = [
    "Available for WFO, Hybrid, or Remote roles",
    "Fast learner and highly adaptable in dynamic environments",
    "Ready to contribute in IT Support or Junior Web Developer roles"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">Skill & Tools</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3 mt-10">Additional Info</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        {additionalInfo.map((info, i) => (
          <li key={i}>{info}</li>
        ))}
      </ul>
    </section>
  );
}
