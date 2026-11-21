"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, fast and professional websites built for businesses, organizations and individuals.",
    features: [
      "Business Websites",
      "Company Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Web Applications",
      "Custom Web Platforms",
    ],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Powerful mobile applications designed for Android and iOS with modern user experiences.",
    features: [
      "Android Apps",
      "iOS Apps",
      "Flutter Applications",
      "Business Apps",
      "Marketplace Apps",
      "Custom Mobile Solutions",
    ],
  },
  {
    number: "03",
    title: "Software Development",
    description:
      "Custom software systems designed to solve specific business and organizational problems.",
    features: [
      "Business Management Systems",
      "Management Software",
      "Booking Systems",
      "Marketplace Platforms",
      "Customer Management",
      "Custom Software",
    ],
  },
  {
    number: "04",
    title: "Artificial Intelligence",
    description:
      "AI-powered solutions designed to automate tasks, improve productivity and create smarter digital products.",
    features: [
      "AI Applications",
      "AI Chatbots",
      "Automation",
      "AI Assistants",
      "Data Analysis",
      "Custom AI Solutions",
    ],
  },
  {
    number: "05",
    title: "Cybersecurity",
    description:
      "Security-focused technology solutions designed to protect digital systems, applications and information.",
    features: [
      "Security Assessments",
      "Cybersecurity Applications",
      "Digital Forensics",
      "Security Awareness",
      "Incident Management",
      "Security Solutions",
    ],
  },
  {
    number: "06",
    title: "Digital Solutions",
    description:
      "Complete technology solutions that combine different digital services into one powerful system.",
    features: [
      "Digital Platforms",
      "Business Automation",
      "Online Systems",
      "Digital Transformation",
      "Technology Consulting",
      "Custom Solutions",
    ],
  },
];

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07111F]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            JECODER
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-sm font-semibold text-[#00cfff]"
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="text-sm text-white/70 transition hover:text-white"
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

          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="rounded-full bg-[#00cfff] px-5 py-3 text-sm font-bold text-[#07111F] transition hover:bg-white"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07111F] px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-[#00cfff]"
              >
                Services
              </Link>

              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-[#00cfff] px-5 py-3 text-sm font-bold text-[#07111F]"
              >
                Start a Project
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#00cfff]">
            JECODER Services
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Technology solutions
            <span className="text-[#00cfff]"> built for you.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
            From websites and mobile applications to artificial intelligence,
            cybersecurity and custom software, JECODER builds digital solutions
            designed around real problems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="rounded-full bg-[#00cfff] px-7 py-4 text-center font-bold text-[#07111F] transition hover:bg-white"
            >
              Start a Project
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-bold transition hover:border-[#00cfff] hover:text-[#00cfff]"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-[#0D1B2A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
              What We Do
            </p>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              Our technology services
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              We combine design, development and technology to create digital
              products that help businesses and individuals move forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-white/10 bg-[#07111F] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#00cfff]/40 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-5xl font-extrabold text-[#00cfff]/25">
                    {service.number}
                  </span>

                  <div className="rounded-full border border-[#00cfff]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00cfff]">
                    JECODER
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-extrabold md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {service.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <span className="text-[#00cfff]">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
            Our Process
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            From idea to launch.
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            We keep the process straightforward so you always know what is
            happening with your project.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Discovery",
              text: "We understand your idea, goals and requirements.",
            },
            {
              number: "02",
              title: "Planning",
              text: "We define the structure, features and technology needed.",
            },
            {
              number: "03",
              title: "Development",
              text: "We design and build the solution.",
            },
            {
              number: "04",
              title: "Launch",
              text: "We test, deploy and help move your product forward.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="text-4xl font-extrabold text-[#00cfff]">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

              <p className="mt-3 leading-7 text-white/50">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why JECODER */}
      <section className="border-y border-white/10 bg-[#0D1B2A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
                Why JECODER
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Technology that focuses on results.
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Modern Technology",
                  text: "We use modern tools and technologies to build reliable digital products.",
                },
                {
                  title: "User Focused",
                  text: "We build around the people who will actually use the product.",
                },
                {
                  title: "Scalable",
                  text: "Our solutions are designed with future growth in mind.",
                },
                {
                  title: "Security Conscious",
                  text: "Security is considered throughout the development process.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[#00cfff] pl-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-2 leading-7 text-white/50">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#00cfff]">
          Our Work
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold md:text-6xl">
          See what we are
          <span className="text-[#00cfff]"> building.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
          Explore JECODER projects and see how we are turning ideas into
          practical digital products.
        </p>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex rounded-full bg-[#00cfff] px-7 py-4 font-bold text-[#07111F] transition hover:bg-white"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-white/10 bg-[#0D1B2A]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#00cfff]">
            Start Something New
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold md:text-6xl">
            Have an idea?
            <span className="text-[#00cfff]"> Let&apos;s build it.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Tell us what you want to build and let&apos;s discuss how JECODER
            can turn your idea into a real digital solution.
          </p>

          <div className="mt-10">
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-[#00cfff] px-7 py-4 font-bold text-[#07111F] transition hover:bg-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <Link
                href="/"
                className="text-xl font-extrabold"
              >
                JECODER
              </Link>

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

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-[#64748B] sm:flex-row">
            <div>
              © 2026 JECODER. All rights reserved.
            </div>

            <div>
              Technology. Innovation. Solutions.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}