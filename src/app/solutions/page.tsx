import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Industry Solutions | Yumesorai",
  description:
    "Legacy modernization solutions tailored for healthcare, airlines, and banking. Transform your enterprise systems with AI-driven technology.",
  keywords: [
    "solutions",
    "healthcare modernization",
    "airline systems",
    "banking transformation",
    "industry solutions",
  ],
  openGraph: {
    title: "Industry Solutions | Yumesorai",
    description:
      "Tailored legacy modernization solutions for healthcare, airlines, and banking industries.",
    url: "https://www.yumesorai.com/solutions",
    type: "website",
  },
};

const solutions = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Transform legacy EHR and hospital management systems into modern, HIPAA-compliant platforms",
    benefits: [
      "HIPAA & Compliance",
      "Patient Data Security",
      "System Integration",
      "Zero Downtime",
    ],
    href: "/solutions/healthcare",
    icon: "🏥",
  },
  {
    id: "airlines",
    title: "Airlines & Travel",
    description:
      "Modernize reservation, crew management, and operations systems for the digital age",
    benefits: [
      "Booking Systems",
      "Crew Optimization",
      "Real-time Operations",
      "Scalability",
    ],
    href: "/solutions/airlines",
    icon: "✈️",
  },
  {
    id: "banking",
    title: "Banking & Financial Services",
    description:
      "Upgrade core banking systems and enable open banking APIs with modern architecture",
    benefits: [
      "Core Banking",
      "Open Banking APIs",
      "Fraud Detection",
      "Regulatory Compliance",
    ],
    href: "/solutions/banking",
    icon: "🏦",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-indigo-950/5 bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
              Industry Solutions
            </h1>
            <p className="mt-6 text-base leading-7 text-indigo-950/60 sm:text-lg">
              Legacy modernization strategies tailored to your industry. We specialize
              in transforming mission-critical systems for healthcare, airlines, and
              financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution) => (
              <Card
                key={solution.id}
                variant="outlined"
                className="flex flex-col hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-6 h-full">
                  <div>
                    <div className="text-5xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-indigo-950">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-indigo-950/60">
                      {solution.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-indigo-950 mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-indigo-950/70"
                        >
                          <span className="text-indigo-600">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={solution.href}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none bg-primary text-primary-foreground hover:bg-primary-700 active:bg-primary-800 h-12 px-6 text-base w-full"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-indigo-950/5 bg-indigo-50/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Transform Your Legacy Systems?
            </h2>
            <p className="mt-4 text-base text-indigo-100">
              Get a personalized assessment for your industry and modernization roadmap.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none bg-secondary text-secondary-foreground hover:bg-secondary-700 active:bg-secondary-800 h-12 px-6 text-base"
              >
                Free Assessment
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none text-white hover:bg-white/20 h-12 px-6 text-base"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
