import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "CALABAR APP",
    category: "Local Marketplace & Services",
    description:
      "An all-in-one digital platform designed to connect people with food, delivery, rides, services, rentals, jobs, events, buying and selling, and other everyday needs in Calabar.",
    status: "In Development",
    technologies: ["Flutter", "Dart", "Flask", "MySQL"],
  },
  {
    number: "02",
    name: "CYBER GUARD",
    category: "Cybersecurity Mobile App",
    description:
      "A mobile cybersecurity application designed to provide users with practical security tools, awareness features and cybercrime reporting capabilities.",
    status: "In Development",
    technologies: ["Flutter", "Dart", "Security", "API"],
  },
  {
    number: "03",
    name: "CYBERCRIME MANAGEMENT SYSTEM",
    category: "Cybercrime & Digital Evidence",
    description:
      "A web-based system for reporting cybercrime incidents, managing digital evidence, tracking evidence custody and supporting evidence integrity verification.",
    status: "In Development",
    technologies: ["Python", "Flask", "MySQL", "Digital Forensics"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            JECODER
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="text-sm font-semibold text-[#00cfff]"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-sm text-white/70 transition hover:text-white"
            >
              About
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-[#00cfff] px-5 py-3 text-sm font-bold text-[#07111F] transition hover:bg-white"
          >
            Start a Project
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#00cfff]">
            Our Projects
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Technology we are
            <span className="text-[#00cfff]"> building.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
            Explore some of the digital products and technology solutions
            being developed by JECODER.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="border-y border-white/10 bg-[#0D1B2A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-3xl border border-white/10 bg-[#07111F] p-8 transition hover:border-[#00cfff]/40 md:p-10 lg:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-[120px_1fr_auto] lg:items-start">
                  {/* Number */}
                  <div>
                    <span className="text-5xl font-extrabold text-[#00cfff]/30">
                      {project.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00cfff]">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                      {project.name}
                    </h2>

                    <p className="mt-5 max-w-3xl leading-8 text-white/60">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="lg:text-right">
                    <span className="inline-flex rounded-full border border-[#00cfff]/30 bg-[#00cfff]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#00cfff]">
                      {project.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
            What We Build
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            From ideas to real digital products.
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            JECODER develops technology across different industries and use
            cases, with a focus on practical solutions that can grow over
            time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Web Applications",
            "Mobile Applications",
            "Business Software",
            "AI Solutions",
            "Cybersecurity Products",
            "Digital Platforms",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-5 h-2 w-12 rounded-full bg-[#00cfff]" />

              <h3 className="text-xl font-bold">{item}</h3>

              <p className="mt-3 leading-7 text-white/50">
                Modern technology designed around real users and real
                problems.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-white/10 bg-[#0D1B2A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
                Our Philosophy
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Build technology people actually need.
              </h2>
            </div>

            <div className="space-y-6 leading-8 text-white/60">
              <p>
                We believe successful technology starts with understanding the
                problem before writing the code.
              </p>

              <p>
                Every JECODER project is designed with usability,
                scalability, security and long-term growth in mind.
              </p>

              <p>
                Our goal is not simply to build software. Our goal is to build
                useful products that can create real value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#00cfff]">
          Have an Idea?
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold md:text-6xl">
          Let&apos;s build your
          <span className="text-[#00cfff]"> next project.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
          Tell us what you want to build and let&apos;s discuss how JECODER
          can turn the idea into a working digital solution.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-[#00cfff] px-7 py-4 font-bold text-[#07111F] transition hover:bg-white"
          >
            Explore Services
          </Link>

          <Link
            href="/#contact"
            className="rounded-full border border-white/20 px-7 py-4 font-bold transition hover:border-[#00cfff] hover:text-[#00cfff]"
          >
            Start a Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-xl font-extrabold">JECODER</div>

              <p className="mt-2 text-sm text-white/50">
                Technology. Innovation. Solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/projects"
                className="transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-[#526477] sm:flex-row">
            <p>© 2026 JECODER. All rights reserved.</p>

            <p>Technology. Innovation. Solutions.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}