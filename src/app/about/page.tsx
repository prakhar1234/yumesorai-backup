import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Yumesorai",
  description:
    "Learn about Yumesorai's mission to transform legacy systems into modern platforms using AI-driven technology and proven methodologies.",
  keywords: [
    "about",
    "company",
    "mission",
    "legacy modernization",
    "AI transformation",
  ],
  openGraph: {
    title: "About Us | Yumesorai",
    description:
      "Transforming enterprise legacy systems into modern, cloud-native platforms.",
    url: "https://www.yumesorai.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-indigo-950/5 bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
              About Yumesorai
            </h1>
            <p className="mt-6 text-base leading-7 text-indigo-950/60 sm:text-lg">
              We&apos;re transforming how enterprises modernize their legacy systems.
              Using AI-driven technology and proven methodologies, we help organizations
              unlock the potential of their critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-indigo-950">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-indigo-950/60">
                To empower enterprises to modernize their legacy systems efficiently,
                safely, and cost-effectively using advanced AI and proven transformation
                methodologies.
              </p>
              <p className="mt-4 text-lg text-indigo-950/60">
                We believe that legacy systems shouldn&apos;t hold back innovation. With
                the right approach and technology, any enterprise can transform their
                critical infrastructure into modern, scalable platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg bg-indigo-50 p-6">
                <h3 className="text-lg font-semibold text-indigo-950">
                  ✓ AI-Powered Analysis
                </h3>
                <p className="mt-2 text-indigo-950/60">
                  Advanced AI analyzes your legacy code to understand functionality and
                  dependencies automatically.
                </p>
              </div>

              <div className="rounded-lg bg-indigo-50 p-6">
                <h3 className="text-lg font-semibold text-indigo-950">
                  ✓ Zero-Downtime Migration
                </h3>
                <p className="mt-2 text-indigo-950/60">
                  Transition to modern systems without disrupting operations or user access.
                </p>
              </div>

              <div className="rounded-lg bg-indigo-50 p-6">
                <h3 className="text-lg font-semibold text-indigo-950">
                  ✓ Industry Expertise
                </h3>
                <p className="mt-2 text-indigo-950/60">
                  Deep experience in healthcare, airlines, banking, and other mission-critical
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-indigo-50/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-950">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-indigo-950/60">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="rounded-lg bg-white p-6 border border-indigo-950/5">
              <h3 className="text-lg font-semibold text-indigo-950">Innovation</h3>
              <p className="mt-2 text-indigo-950/60">
                Leveraging cutting-edge AI and technology to solve complex modernization
                challenges.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-indigo-950/5">
              <h3 className="text-lg font-semibold text-indigo-950">Reliability</h3>
              <p className="mt-2 text-indigo-950/60">
                Ensuring mission-critical systems continue operating throughout transformation.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-indigo-950/5">
              <h3 className="text-lg font-semibold text-indigo-950">Efficiency</h3>
              <p className="mt-2 text-indigo-950/60">
                Reducing time and cost of modernization while maximizing business value.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-indigo-950/5">
              <h3 className="text-lg font-semibold text-indigo-950">Expertise</h3>
              <p className="mt-2 text-indigo-950/60">
                Deep knowledge of legacy systems and modern architecture patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-950 text-center">
            Why Choose Yumesorai?
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white text-xl">📊</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-950">
                  Proven Track Record
                </h3>
                <p className="mt-2 text-indigo-950/60">
                  Successfully transformed legacy systems for Fortune 500 companies across
                  healthcare, aviation, and finance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white text-xl">⚡</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-950">
                  Speed to Value
                </h3>
                <p className="mt-2 text-indigo-950/60">
                  Our AI-powered approach reduces modernization timelines from years to months.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white text-xl">🔒</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-950">
                  Enterprise Security
                </h3>
                <p className="mt-2 text-indigo-950/60">
                  Bank-grade security and compliance throughout the entire transformation process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white text-xl">👥</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-950">
                  Expert Team
                </h3>
                <p className="mt-2 text-indigo-950/60">
                  Dedicated modernization specialists with decades of combined experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-indigo-950/5 bg-indigo-50/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="mt-4 text-base text-indigo-100">
              Start your modernization journey with a free assessment from our experts.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none bg-secondary text-secondary-foreground hover:bg-secondary-700 active:bg-secondary-800 h-12 px-6 text-base"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none text-white hover:bg-white/20 h-12 px-6 text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
