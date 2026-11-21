import Link from "next/link";

export default function AboutPage() {
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
              className="text-sm text-white/70 transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold text-[#00cfff]"
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
            About JECODER
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Technology built to
            <span className="text-[#00cfff]"> solve real problems.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
            JECODER is a technology company focused on building modern digital
            solutions for businesses, organizations, startups and individuals.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-white/10 bg-[#0D1B2A]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
              Who We Are
            </p>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              Building the future with technology.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/65">
            <p>
              JECODER is a technology brand created to design and develop
              useful digital products that make everyday life and business
              easier.
            </p>

            <p>
              We work across software development, websites, mobile
              applications, artificial intelligence, cybersecurity and other
              areas of modern technology.
            </p>

            <p>
              Our goal is simple: understand a real problem, build the right
              technology and create a solution that people can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
            What We Do
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            One technology company. Many possibilities.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Web Development",
              text: "Professional websites and web applications designed for speed, usability and growth.",
            },
            {
              title: "Mobile Apps",
              text: "Modern mobile applications for businesses, startups and digital products.",
            },
            {
              title: "Software",
              text: "Custom software systems built around specific business and organizational needs.",
            },
            {
              title: "Artificial Intelligence",
              text: "AI-powered tools and solutions that improve productivity and automate useful tasks.",
            },
            {
              title: "Cybersecurity",
              text: "Security-focused solutions designed to protect systems, applications and digital information.",
            },
            {
              title: "Digital Products",
              text: "Technology products and platforms created to solve real-world problems at scale.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-[#00cfff]/40"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="border-y border-white/10 bg-[#0D1B2A]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
              Our Mission
            </p>

            <h3 className="mt-4 text-3xl font-extrabold">
              Build useful technology.
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              We want technology to be practical, accessible and capable of
              creating real value.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
              Our Vision
            </p>

            <h3 className="mt-4 text-3xl font-extrabold">
              Become a major African technology brand.
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              JECODER aims to create products and services that can grow from
              local solutions into global technology platforms.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#00cfff]">
              Our Approach
            </p>

            <h3 className="mt-4 text-3xl font-extrabold">
              Simple ideas. Serious execution.
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              We focus on good design, reliable technology, security,
              scalability and solutions people actually want to use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#00cfff]">
          Let&apos;s Build
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold md:text-6xl">
          Have an idea?
          <span className="text-[#00cfff]"> Let&apos;s turn it into technology.</span>
        </h2>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-[#00cfff] px-7 py-4 font-bold text-[#07111F] transition hover:bg-white"
          >
            Explore Services
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white/20 px-7 py-4 font-bold transition hover:border-[#00cfff] hover:text-[#00cfff]"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="text-xl font-extrabold">JECODER</div>
            <p className="mt-2 text-sm text-white/50">
              Technology. Innovation. Solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <Link href="/projects" className="transition hover:text-white">
              Projects
            </Link>

            <Link href="/about" className="transition hover:text-white">
              About
            </Link>

            <Link href="/#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}