"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, fast and scalable websites and web applications built for businesses, startups and organizations.",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Mobile Apps",
    description:
      "Professional iOS and Android applications designed to solve real problems and create great user experiences.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Software Solutions",
    description:
      "Custom software systems built around your business operations, customers and long-term goals.",
    icon: "▣",
  },
  {
    number: "04",
    title: "Artificial Intelligence",
    description:
      "Smart AI-powered solutions, automation and intelligent tools that help businesses work faster.",
    icon: "✦",
  },
  {
    number: "05",
    title: "Cybersecurity",
    description:
      "Security-focused solutions designed to protect systems, applications, businesses and digital information.",
    icon: "◇",
  },
  {
    number: "06",
    title: "Digital Products",
    description:
      "From ideas to launch, we turn useful digital concepts into real products people can use.",
    icon: "◎",
  },
];

const projects = [
  {
    category: "LOCAL MARKETPLACE",
    title: "CALABAR APP",
    description:
      "An all-in-one digital marketplace connecting people with food, services, delivery, jobs, rentals, events and more.",
    tag: "Mobile Platform",
  },
  {
    category: "CYBERSECURITY",
    title: "CYBER GUARD",
    description:
      "A security-focused mobile application designed to provide practical cybersecurity tools and digital protection.",
    tag: "Security App",
  },
  {
    category: "DIGITAL FORENSICS",
    title: "CYBERCRIME MANAGEMENT SYSTEM",
    description:
      "A secure system for reporting cybercrime incidents, managing digital evidence and maintaining evidence custody.",
    tag: "Web Application",
  },
];

const techAreas = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Web Development",
  "Mobile Development",
  "Cloud Technology",
  "Software Engineering",
  "Digital Products",
  "Automation",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b14] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-15%] top-[-15%] h-[500px] w-[500px] rounded-full bg-[#008cff]/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#00e5ff]/8 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[35%] h-[500px] w-[500px] rounded-full bg-[#0066ff]/8 blur-[140px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050b14]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00a8ff]/40 bg-[#00a8ff]/10 shadow-[0_0_25px_rgba(0,168,255,0.12)]">
              <span className="text-lg font-black tracking-[-0.08em] text-[#00d9ff]">
                JC
              </span>
            </div>

            <div className="text-left">
              <div className="text-xl font-black tracking-[0.12em] text-white">
                JECODER
              </div>

              <div className="hidden text-[8px] font-semibold tracking-[0.28em] text-[#7d8da1] sm:block">
                TECHNOLOGY • INNOVATION • SOLUTIONS
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/services"
              className="text-sm text-[#a9b7c6] transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="text-sm text-[#a9b7c6] transition hover:text-white"
            >
              Projects
            </Link>

            <button
              onClick={() => scrollToSection("technology")}
              className="text-sm text-[#a9b7c6] transition hover:text-white"
            >
              Technology
            </button>

            {/* ABOUT NOW OPENS DEDICATED ABOUT PAGE */}
            <Link
              href="/about"
              className="text-sm text-[#a9b7c6] transition hover:text-white"
            >
              About
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-[#00a8ff]/40 bg-[#00a8ff]/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#00e5ff] hover:bg-[#00a8ff]/20"
            >
              Start a Project
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07111f] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm text-[#b8c4d1]"
              >
                Services
              </Link>

              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm text-[#b8c4d1]"
              >
                Projects
              </Link>

              <button
                onClick={() => scrollToSection("technology")}
                className="text-left text-sm text-[#b8c4d1]"
              >
                Technology
              </button>

              {/* MOBILE ABOUT NOW OPENS /about */}
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm text-[#b8c4d1]"
              >
                About
              </Link>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full rounded-xl bg-[#00a8ff] px-5 py-3 text-sm font-bold text-white"
              >
                Start a Project
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00a8ff]/25 bg-[#00a8ff]/8 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00e5ff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ddfff]">
                Building the future with technology
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Technology.
              <br />
              <span className="bg-gradient-to-r from-[#00a8ff] via-[#00d9ff] to-[#7cecff] bg-clip-text text-transparent">
                Innovation.
              </span>
              <br />
              Solutions.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9eacbb] sm:text-xl">
              JECODER builds modern digital solutions for businesses,
              organizations and individuals — from websites and mobile apps
              to AI, software and cybersecurity.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("contact")}
                className="group rounded-full bg-[#00a8ff] px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(0,168,255,0.25)] transition hover:-translate-y-1 hover:bg-[#0097e8]"
              >
                Start a Project
                <span className="ml-3 transition group-hover:translate-x-1">
                  →
                </span>
              </button>

              <Link
                href="/projects"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold text-white transition hover:border-[#00a8ff]/50 hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs font-medium uppercase tracking-[0.18em] text-[#6f8093]">
              <span>Web</span>
              <span>Mobile</span>
              <span>AI</span>
              <span>Cybersecurity</span>
              <span>Software</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-10 rounded-full bg-[#00a8ff]/15 blur-[90px]" />

            <div className="relative aspect-square rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-5 rounded-[2rem] border border-[#00a8ff]/15" />

              <div className="absolute left-10 right-10 top-10 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#627286]">
                  JECODER / LABS
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-52 w-52 items-center justify-center sm:h-64 sm:w-64">
                  <div className="absolute inset-0 rotate-45 rounded-[2.5rem] border border-[#00a8ff]/30 bg-[#00a8ff]/5" />
                  <div className="absolute inset-8 rounded-[1.8rem] border border-[#00e5ff]/25 bg-[#00e5ff]/5" />

                  <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-[#00c8ff]/40 bg-[#071522] shadow-[0_0_60px_rgba(0,168,255,0.25)]">
                    <span className="text-5xl font-black tracking-[-0.1em] text-[#00d9ff]">
                      JC
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#64768b]">
                    DIGITAL_SYSTEM
                  </span>

                  <span className="text-xs text-[#00d9ff]">ONLINE</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#007cff] to-[#00e5ff]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#56677a] md:flex">
          <span>Scroll to explore</span>
          <span className="h-px w-10 bg-[#56677a]" />
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-y border-white/10 bg-[#07111f]/60 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-6 text-[#8291a2]">
            We combine software engineering, creativity and technology to
            transform ideas into useful digital products.
          </p>

          <div className="flex items-center gap-5 text-xs font-bold uppercase tracking-[0.2em] text-[#647589]">
            <span>Think</span>
            <span className="text-[#00bfff]">•</span>
            <span>Build</span>
            <span className="text-[#00bfff]">•</span>
            <span>Scale</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-24 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00bfff]">
              What we do
            </p>

            <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Technology built around
              <span className="text-[#00c8ff]"> real problems.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#8797a9]">
              JECODER helps turn ideas, business challenges and opportunities
              into practical digital solutions.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-[#07111f] p-8 transition hover:bg-[#0a1727]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00a8ff]/20 bg-[#00a8ff]/8 text-xl text-[#00cfff]">
                    {service.icon}
                  </div>

                  <span className="font-mono text-xs text-[#46586d]">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold">{service.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#8191a4]">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-10 bg-[#00a8ff]/50 transition-all group-hover:w-20 group-hover:bg-[#00e5ff]" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-full border border-[#00a8ff]/30 bg-[#00a8ff]/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#00e5ff]/60 hover:bg-[#00a8ff]/15"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/10 bg-[#07111f]/55 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00bfff]">
                Selected projects
              </p>

              <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Ideas become
                <span className="text-[#00c8ff]"> products.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#8797a9]">
                A look at some of the digital products and systems being
                developed under the JECODER ecosystem.
              </p>
            </div>

            <span className="hidden text-xs font-bold uppercase tracking-[0.25em] text-[#526276] lg:block">
              2026 / Selected Work
            </span>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group grid overflow-hidden rounded-3xl border border-white/10 bg-[#081321] lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#081a2c] to-[#050b14] lg:border-b-0 lg:border-r">
                  <div className="absolute h-44 w-44 rounded-full bg-[#00a8ff]/10 blur-[70px]" />

                  <div className="relative flex h-40 w-40 rotate-45 items-center justify-center rounded-[2rem] border border-[#00a8ff]/25 bg-[#00a8ff]/5 transition duration-500 group-hover:rotate-[50deg]">
                    <div className="-rotate-45 text-center transition duration-500 group-hover:-rotate-[50deg]">
                      <div className="text-3xl font-black text-[#00cfff]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em] text-[#607387]">
                        PROJECT
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00c8ff]">
                      {project.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#526579]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5d6f83]">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-black tracking-[-0.03em]">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#8292a5]">
                    {project.description}
                  </p>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="mt-8 flex w-fit items-center gap-3 text-sm font-bold text-[#00c8ff] transition hover:gap-5"
                  >
                    Discuss a similar project
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full bg-[#00a8ff] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(0,168,255,0.15)] transition hover:-translate-y-1 hover:bg-[#0097e8]"
            >
              View All Projects
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section
        id="technology"
        className="scroll-mt-24 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00bfff]">
              Technology
            </p>

            <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Built for the
              <span className="text-[#00c8ff]"> digital age.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#8797a9]">
              We work across modern technologies to build products that are
              reliable, scalable and ready for the future.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-8 rounded-full border border-[#00a8ff]/30 bg-[#00a8ff]/8 px-6 py-3 text-sm font-bold text-white transition hover:bg-[#00a8ff]/15"
            >
              Work With JECODER →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {techAreas.map((tech, index) => (
              <div
                key={tech}
                className="group relative flex min-h-[140px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] p-5 transition hover:-translate-y-1 hover:border-[#00a8ff]/35"
              >
                <span className="text-xs font-mono text-[#46596d]">
                  0{index + 1}
                </span>

                <span className="text-sm font-bold leading-5 text-[#d9e2eb]">
                  {tech}
                </span>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#00d9ff] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/10 bg-[#07111f]/55 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00bfff]">
              About JECODER
            </p>

            <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              More than a
              <span className="text-[#00c8ff]"> tech company.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#8999aa]">
              JECODER is a technology brand focused on building useful digital
              products, software and services that solve real-world problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#8999aa]">
              From local platforms to advanced cybersecurity and AI solutions,
              our goal is simple: use technology to create opportunities,
              improve businesses and make everyday life easier.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#00a8ff]/30 bg-[#00a8ff]/8 px-6 py-3 text-sm font-bold text-white transition hover:border-[#00e5ff]/60 hover:bg-[#00a8ff]/15"
            >
              Learn More About JECODER
              <span>→</span>
            </Link>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-black text-white">01</div>

                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#637489]">
                  Vision
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-white">∞</div>

                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#637489]">
                  Possibilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#00a8ff]/20 bg-gradient-to-br from-[#0a1b2d] via-[#071321] to-[#050b14] p-8 sm:p-12 lg:p-20">
          <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[500px] w-[500px] rounded-full bg-[#00a8ff]/10 blur-[100px]" />

          <div className="relative max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#00c8ff]">
              Have an idea?
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-[#00cfff]">remarkable.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#8999aa]">
              Tell us what you want to build. Whether it&apos;s a website,
              mobile app, software system, AI solution or cybersecurity
              project, JECODER can help bring the idea to life.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/2347079831871"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#00a8ff] px-7 py-4 text-center text-sm font-bold text-white shadow-[0_0_35px_rgba(0,168,255,0.22)] transition hover:-translate-y-1 hover:bg-[#0097e8]"
              >
                Chat on WhatsApp →
              </a>

              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-[#64758a]">
              <span>WhatsApp: +234 707 983 1871</span>
              <span>Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="text-xl font-black tracking-[0.12em]">
              JECODER
            </div>

            <p className="mt-2 text-xs text-[#607083]">
              Technology. Innovation. Solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-[#66778b]">
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <Link href="/projects" className="transition hover:text-white">
              Projects
            </Link>

            {/* FOOTER ABOUT NOW OPENS /about */}
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="transition hover:text-white"
            >
              Contact
            </button>
          </div>

          <div className="text-xs text-[#4e6074]">
            © 2026 JECODER. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}