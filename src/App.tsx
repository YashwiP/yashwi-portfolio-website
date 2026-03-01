function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* ================= NAVBAR ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Yashwi Pandey</h1>
          <div className="space-x-10 text-base text-gray-300 hidden md:block font-medium tracking-wide">
            <a href="#" className="hover:text-white transition duration-200">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
        </nav>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[95vh] flex items-center px-12 lg:px-24">
        <div className="w-full grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-6xl md:text-8xl leading-[1.05] font-bold leading-tight mb-6">
              Hello, I'm <br /> Yashwi Pandey
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              Cybersecurity Researcher & AI Security Enthusiast
            </p>

            {/* Credibility Badges */}
            <div className="flex flex-wrap gap-3 mb-6 text-sm text-gray-400">
              <span className="border border-gray-700 px-3 py-1 rounded-full">
                ICSETI 2026 Paper Accepted
              </span>
              <span className="border border-gray-700 px-3 py-1 rounded-full">
                CompTIA Security+ Certified
              </span>
              <span className="border border-gray-700 px-3 py-1 rounded-full">
                SOC Analyst Intern @ Tribastion
              </span>
            </div>

            <p className="text-gray-500 mb-8 max-w-2xl">
              Building intelligent threat detection systems and automating SOC
              operations using AI, NLP, and security engineering.
            </p>

            {/* Resume Button */}
            <a
              href="/Yashwi_Pandey_Resume.pdf"
              download="Yashwi_Pandey_Resume.pdf"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Download Resume
            </a>

            {/* Stats */}
            <div className="flex gap-8 mt-10 text-center">
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-gray-500 text-sm">Research Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-gray-500 text-sm">Industry Internship</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-gray-500 text-sm">Patent-Pending System</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative">
            <div className="absolute w-80 h-80 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>

            <img
              src="/profile.jpg"
              alt="Yashwi Pandey"
              className="w-96 h-96 md:w-[420px] md:h-[420px] rounded-full object-cover border border-gray-700 relative z-10"
            />
          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-20 border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Technical Skills
          </h2>

          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Security-focused expertise spanning threat detection, SOC operations,
            and modern engineering practices.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity",
                skills: ["Network Security fundamentals", "Security monitoring & alert triage", "Vulnerability assessment & remediation", "Log analysis & threat hunting", "SOC Workflows", "SIEM tools (log analysis & correlation)", "Password attacks & privilege escalation","Security operations (SOC workflows)", "OWASP Top 10"]
              },
              {
                title: "Security Tools",
                skills: ["Wazuh", "Shuffle", "GLPI", "Burp Suite", "Metasploit", "Active Directory", "Nmap"]
              },
              {
                title: "Tools & Platforms",
                skills: ["Docker", "Git", "Github", "MySQL", "Linux"]
              },
              {
                title: "Programming & DevOps",
                skills: ["Python", "JavaScript", "React.js","SQL", "Docker", "Git", "Java", "Linux", "Cloud Security (AWS)"]
              }
            ].map((card, index) => (
              <div key={index} className="border border-gray-800 rounded-2xl p-6 bg-gray-950">
                <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                  {card.skills.map((skill, i) => (
                    <span key={i} className="border border-gray-700 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>

          <div className="border border-gray-800 rounded-2xl p-8 bg-gray-950">
            <div className="flex justify-between flex-wrap gap-4 mb-4">
              <h3 className="text-xl font-semibold">
                SOC Analyst Intern
              </h3>
              <span className="text-sm text-gray-500">
                May 2025 – July 2025
              </span>
            </div>

            <p className="text-gray-400 mb-2">
              Tribastion Technologies Pvt. Ltd.
            </p>

            <ul className="text-gray-500 space-y-2 text-sm mt-4 list-disc list-inside">
              <li>Integrated Wazuh, Shuffle, and GLPI for SOC automation.</li>
              <li>Built REST API-based playbooks for alert triage workflows.</li>
              <li>Reduced manual alert handling effort through enrichment automation.</li>
              <li>Validated automation workflows in Linux-based SOC environments.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Security research and engineering projects combining AI, automation,
            and secure system design.
          </p>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "AI-Assisted Phishing Detection",
                img: "/project1.jpg",
                desc: "Research-driven ML/NLP system analyzing evolution of phishing from grammar-error-based attacks to AI-generated behavioral mimicry. Engineered linguistic and behavioral features, improving AI-phishing detection performance using advanced feature extraction techniques.",
                tags: ["Python", "NLP", "Machine Learning", "spaCy", "LLMs", "Phishing Detection", "AI Security", "Research Paper"]
              },
              {
                title: "SQL Injection Defense System",
                img: "/project2.jpg",
                desc: "Web-based educational platform demonstrating SQL injection attacks and layered defense mechanisms using parameterized queries and cryptographic hashing. Includes secure query processing simulation and experimental evaluation framework.",
                tags: ["Python", "MySQL", "OWASP", "Web Security", "Cryptography"]
              },
              {
                title: "SOC Automation (Wazuh + Shuffle)",
                img: "/project3.jpg",
                desc: "Automated SOC incident detection and response by integrating SIEM, SOAR, and ITSM platforms. Developed REST API-based playbooks to streamline alert triage, enrichment, and ticketing workflows in a Linux environment.",
                tags: ["Wazuh", "Shuffle", "GLPI", "REST APIs", "Linux", "SOC Automation", "JSON"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-[#0B0F19] border border-gray-800 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-800 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/YashwiP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full bg-white text-black text-center py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>Cybersecurity Researcher | Security Engineer | SOC Automation</p>
        <p className="mt-2">© {new Date().getFullYear()} Yashwi Pandey</p>
      </footer>

    </div>
  );
}

export default App;