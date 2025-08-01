export default function Skills() {
  const generalSkills = [
    "IT Support",
    "Troubleshooting",
    "Computer Networking",
    "Basic Web Development",
    "Inventory System",
    "Office Tools",
    "Technical Documentation",
    "Team Collaboration"
  ];

  const availability = [
    "Open for Full-time: On-site, Hybrid, or Remote",
    "Adaptive, responsible, and detail-oriented",
    "Ready to contribute in Support or Development teams"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">General Skills</h2>
      <div className="flex flex-wrap gap-2">
        {generalSkills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3 mt-10">Professional Summary</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        {availability.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
