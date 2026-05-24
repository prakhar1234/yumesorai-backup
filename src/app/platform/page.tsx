import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.yumesorai.com";

export const metadata: Metadata = {
  title: "How Yumesorai Works | Platform & Methodology",
  description:
    "Learn how Yumesorai uses AI-powered modernization to transform legacy systems through 5 proven steps: Analyze, Design, Transform, Test, and Deploy.",
  keywords: [
    "legacy modernization process",
    "AI code analysis",
    "system architecture transformation",
    "zero-downtime migration",
    "platform modernization",
  ],
  openGraph: {
    title: "How Yumesorai Works | Platform & Methodology",
    description:
      "Learn how Yumesorai uses AI-powered modernization to transform legacy systems through 5 proven steps: Analyze, Design, Transform, Test, and Deploy.",
    url: `${siteUrl}/platform`,
    type: "website",
    images: [
      {
        url: "/og-platform.png",
        width: 1200,
        height: 630,
        alt: "Yumesorai Platform - How It Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Yumesorai Works | Platform & Methodology",
    description:
      "Discover the 5-step AI-powered process that transforms legacy systems safely and efficiently.",
  },
  alternates: {
    canonical: `${siteUrl}/platform`,
  },
};

function PlatformSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Yumesorai analyze legacy systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI performs semantic code analysis on COBOL, PL/I, Assembler, and other legacy languages, mapping business logic with 99.99% accuracy to understand your system architecture and data flows.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during the Transform phase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We automatically migrate your code to modern languages, transform your data schemas, and restructure your architecture for cloud-native deployment with comprehensive validation at every step.",
        },
      },
      {
        "@type": "Question",
        name: "Is there downtime during the migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our zero-downtime migration strategy uses parallel-run architecture where the old and new systems run simultaneously. We validate every transaction before cutover, ensuring your business never stops.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PlatformPage() {
  const processSteps = [
    {
      number: 1,
      title: "Analyze",
      icon: "🔍",
      description:
        "Our AI performs semantic code analysis on your legacy systems, mapping business logic with 99.99% accuracy. We extract data models, transaction flows, and compliance requirements.",
    },
    {
      number: 2,
      title: "Design",
      icon: "📐",
      description:
        "We create a comprehensive modernization blueprint including system architecture, data migration strategy, and transformation roadmap tailored to your business requirements.",
    },
    {
      number: 3,
      title: "Transform",
      icon: "⚙️",
      description:
        "Automated code and data migration translates your legacy systems to modern languages and cloud-native architecture. We handle billions of lines of code with precision.",
    },
    {
      number: 4,
      title: "Test",
      icon: "✓",
      description:
        "AI-driven testing generates comprehensive test suites from production data patterns. We validate every transaction, edge case, and regulatory requirement before deployment.",
    },
    {
      number: 5,
      title: "Deploy",
      icon: "🚀",
      description:
        "Zero-downtime cutover with parallel-run architecture ensures your business never stops. We monitor, validate, and optimize your new system in production.",
    },
  ];

  const features = [
    {
      title: "AI-Powered Analysis",
      description:
        "Our AI understands COBOL, PL/I, and Assembler at a semantic level, mapping business logic automatically with 99.99% accuracy.",
      icon: "🤖",
    },
    {
      title: "Zero-Downtime Migration",
      description:
        "Parallel-run architecture ensures your business never stops. We validate every transaction before cutover.",
      icon: "⚡",
    },
    {
      title: "Compliance Preservation",
      description:
        "Regulatory mappings are maintained throughout modernization. HIPAA, PCI-DSS, SOX -- all handled automatically.",
      icon: "🔒",
    },
    {
      title: "Reduced Risk",
      description:
        "AI-driven testing generates comprehensive test suites from production data patterns, catching edge cases humans miss.",
      icon: "🛡️",
    },
    {
      title: "Fast Deployment",
      description:
        "What traditionally takes 3-5 years, we deliver in 6-12 months through automated code transformation.",
      icon: "📈",
    },
    {
      title: "Knowledge Capture",
      description:
        "We extract and document decades of embedded business logic before your retiring workforce takes it with them.",
      icon: "📚",
    },
  ];

  const supportedLanguages = [
    "COBOL",
    "PL/I",
    "Assembler",
    "NATURAL",
    "RPG",
    "FOCUS",
    "FORTRAN",
  ];

  const targetPlatforms = [
    "Microservices (Kubernetes)",
    "Cloud-Native (AWS, Azure, GCP)",
    "Node.js & TypeScript",
    "Python & FastAPI",
    "Java & Spring Boot",
    "Go & Rust",
  ];

  const integrations = [
    "Legacy Database Migration",
    "API Gateway Integration",
    "Message Queue Systems",
    "Event Streaming",
    "Blockchain & Smart Contracts",
    "Machine Learning Pipelines",
  ];

  return (
    <>
      <PlatformSchema />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-950/[0.03] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Breadcrumb */}
            <p className="mb-6 inline-flex items-center gap-1 text-xs font-medium text-indigo-950/60">
              <Link href="/" className="hover:text-indigo-950">
                Home
              </Link>
              <span>/</span>
              <span className="text-indigo-950">Platform</span>
            </p>

            {/* Title */}
            <h1 className="text-balance text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl lg:text-6xl">
              How Yumesorai Works
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-indigo-950/60 sm:text-xl">
              Our proven 5-step methodology transforms legacy systems into
              modern, cloud-native platforms using AI-powered analysis and
              automated transformation. Zero disruption. Maximum speed.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
              The Modernization Process
            </h2>
            <p className="mt-4 text-lg text-indigo-950/60">
              From analysis to deployment, every step is optimized for speed,
              accuracy, and zero-downtime execution.
            </p>
          </div>

          {/* Process Flow */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.title}>
                <div className="flex gap-6 sm:gap-8">
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral/10 text-2xl font-bold text-coral ring-4 ring-coral/20 sm:h-20 sm:w-20 sm:text-3xl">
                      {step.icon}
                    </div>
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="mt-4 w-1 flex-grow bg-gradient-to-b from-coral/30 to-coral/10 sm:h-24" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-indigo-950">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-indigo-950/70">
                      {step.description}
                    </p>
                    {index < processSteps.length - 1 && (
                      <div className="mt-6 h-px bg-indigo-950/5" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="bg-indigo-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Enterprises Choose Yumesorai
            </h2>
            <p className="mt-4 text-lg text-white/60">
              We combine deep enterprise expertise with cutting-edge AI to
              deliver modernization outcomes that were previously impossible.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Platform Details */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Supported Languages */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-indigo-950 sm:text-3xl">
              Supported Languages
            </h2>
            <p className="mb-6 text-base text-indigo-950/60">
              Yumesorai&apos;s AI understands and transforms legacy code in:
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {supportedLanguages.map((lang) => (
                <div
                  key={lang}
                  className="rounded-lg border border-indigo-950/10 bg-white p-4 text-center font-medium text-indigo-950 hover:border-coral/30 hover:bg-coral/5 transition-colors"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Target Platforms */}
          <div className="mb-16 border-t border-indigo-950/5 pt-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-indigo-950 sm:text-3xl">
              Target Platforms
            </h2>
            <p className="mb-6 text-base text-indigo-950/60">
              We transform your systems to modern, cloud-native platforms including:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {targetPlatforms.map((platform) => (
                <div
                  key={platform}
                  className="flex items-start gap-3 rounded-lg border border-indigo-950/10 bg-white p-4 hover:border-coral/30 hover:bg-coral/5 transition-colors"
                >
                  <span className="mt-0.5 text-coral font-bold">✓</span>
                  <span className="font-medium text-indigo-950">{platform}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Capabilities */}
          <div className="border-t border-indigo-950/5 pt-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-indigo-950 sm:text-3xl">
              Integration Capabilities
            </h2>
            <p className="mb-6 text-base text-indigo-950/60">
              We seamlessly integrate with modern systems and frameworks:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((integration) => (
                <div
                  key={integration}
                  className="flex items-start gap-3 rounded-lg border border-indigo-950/10 bg-white p-4 hover:border-coral/30 hover:bg-coral/5 transition-colors"
                >
                  <span className="mt-0.5 text-coral font-bold">+</span>
                  <span className="font-medium text-indigo-950">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-950 px-6 py-16 shadow-2xl sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-transparent" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/60">
                Schedule a demo to see how Yumesorai can transform your legacy
                systems. Or download our case studies to learn from enterprises
                that have already succeeded.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-lg bg-coral px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/25 transition-all hover:bg-coral-dark hover:shadow-xl hover:shadow-coral/30"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  Download Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
