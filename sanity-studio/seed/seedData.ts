/**
 * Sanity seed data for Yumesorai CMS.
 *
 * Usage:
 *   cd sanity-studio
 *   npx sanity exec seed/seedData.ts --with-user-token
 *
 * This creates placeholder content for:
 * - 1 author
 * - 3 compliance certifications
 * - 3 industry pages (Healthcare, Airlines, Banking)
 * - 3 blog posts
 * - 5 pre-built assets
 * - 2 executive briefs
 */

import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-01-01" });

const documents = [
  // ───── Author ─────
  {
    _id: "author-placeholder-1",
    _type: "author",
    name: "Yumesorai Editorial",
    slug: { _type: "slug", current: "yumesorai-editorial" },
    role: "Content Team",
    bio: "The Yumesorai editorial team covers enterprise AI, compliance, and digital transformation across regulated industries.",
  },

  // ───── Compliance Certs ─────
  {
    _id: "cert-hipaa",
    _type: "complianceCert",
    name: "HIPAA",
    slug: { _type: "slug", current: "hipaa" },
    shortDescription:
      "Health Insurance Portability and Accountability Act compliance for protecting patient health information.",
    industries: ["healthcare"],
  },
  {
    _id: "cert-soc2",
    _type: "complianceCert",
    name: "SOC 2 Type II",
    slug: { _type: "slug", current: "soc2-type-ii" },
    shortDescription:
      "Service Organization Control 2 Type II certification for security, availability, and confidentiality.",
    industries: ["healthcare", "airlines", "banking"],
  },
  {
    _id: "cert-pci-dss",
    _type: "complianceCert",
    name: "PCI-DSS",
    slug: { _type: "slug", current: "pci-dss" },
    shortDescription:
      "Payment Card Industry Data Security Standard for securing cardholder data.",
    industries: ["banking", "airlines"],
  },

  // ───── Industry Pages ─────
  {
    _id: "industry-healthcare",
    _type: "industryPage",
    title: "AI Solutions for Healthcare",
    slug: { _type: "slug", current: "healthcare" },
    industry: "healthcare",
    heroHeadline: "Transform Patient Outcomes with Compliant AI",
    heroSubtext:
      "Yumesorai delivers HIPAA-compliant AI solutions that reduce administrative burden, improve diagnostics, and accelerate care delivery.",
    challenges: [
      {
        _key: "c1",
        title: "Regulatory Complexity",
        description:
          "Healthcare organizations face stringent HIPAA, HITECH, and state-level privacy regulations that slow AI adoption.",
        icon: "shield",
      },
      {
        _key: "c2",
        title: "Data Silos",
        description:
          "Patient records are fragmented across EHRs, labs, and billing systems, limiting AI effectiveness.",
        icon: "database",
      },
      {
        _key: "c3",
        title: "Clinician Trust",
        description:
          "Physicians need explainable AI outputs before integrating tools into clinical workflows.",
        icon: "users",
      },
    ],
    solutions: [
      {
        _key: "s1",
        title: "Compliant Data Pipeline",
        description:
          "End-to-end encrypted data pipelines with built-in HIPAA safeguards and audit logging.",
        benefits: [
          "PHI stays within your infrastructure",
          "Automated compliance audit trails",
          "BAA-ready architecture",
        ],
      },
      {
        _key: "s2",
        title: "Clinical Decision Support",
        description:
          "Explainable AI models that assist clinicians with diagnostic suggestions and treatment planning.",
        benefits: [
          "Transparent reasoning for every recommendation",
          "Integrates with Epic, Cerner, and other EHRs",
          "Continuous learning from anonymized outcomes",
        ],
      },
    ],
    complianceRequirements: [
      { _type: "reference", _ref: "cert-hipaa", _key: "ref1" },
      { _type: "reference", _ref: "cert-soc2", _key: "ref2" },
    ],
    caseStudyExcerpt:
      "A 200-bed regional hospital reduced radiology report turnaround time by 40% using our AI-assisted imaging analysis, while maintaining full HIPAA compliance.",
    ctaHeadline: "Ready to modernize your healthcare operations?",
    ctaButtonText: "Schedule a Demo",
    ctaButtonLink: "/contact?industry=healthcare",
    seoTitle: "AI for Healthcare | Yumesorai",
    seoDescription:
      "HIPAA-compliant AI solutions for healthcare. Reduce costs, improve outcomes, and stay compliant.",
  },
  {
    _id: "industry-airlines",
    _type: "industryPage",
    title: "AI Solutions for Airlines",
    slug: { _type: "slug", current: "airlines" },
    industry: "airlines",
    heroHeadline: "Elevate Airline Operations with Intelligent AI",
    heroSubtext:
      "From predictive maintenance to dynamic pricing, Yumesorai helps airlines reduce costs and improve passenger experience.",
    challenges: [
      {
        _key: "c1",
        title: "Operational Disruptions",
        description:
          "Weather, crew scheduling, and mechanical issues cause cascading delays that cost millions daily.",
        icon: "alert-triangle",
      },
      {
        _key: "c2",
        title: "Revenue Optimization",
        description:
          "Balancing ticket pricing, ancillary revenue, and load factors requires real-time demand forecasting.",
        icon: "trending-up",
      },
      {
        _key: "c3",
        title: "Safety & Compliance",
        description:
          "FAA, EASA, and IATA regulations require rigorous documentation and traceability for all AI systems.",
        icon: "shield",
      },
    ],
    solutions: [
      {
        _key: "s1",
        title: "Predictive Maintenance Engine",
        description:
          "ML models that predict component failures before they cause delays or cancellations.",
        benefits: [
          "30% reduction in unscheduled maintenance",
          "Integrates with existing MRO systems",
          "Full FAA-traceability",
        ],
      },
      {
        _key: "s2",
        title: "Dynamic Revenue Management",
        description:
          "Real-time pricing optimization using demand signals, competitor data, and booking curves.",
        benefits: [
          "2-5% revenue uplift per seat mile",
          "Automated fare class management",
          "Ancillary revenue bundling",
        ],
      },
    ],
    complianceRequirements: [
      { _type: "reference", _ref: "cert-soc2", _key: "ref1" },
      { _type: "reference", _ref: "cert-pci-dss", _key: "ref2" },
    ],
    caseStudyExcerpt:
      "A mid-size carrier improved on-time performance by 18% in the first quarter after deploying our predictive operations platform.",
    ctaHeadline: "Ready to optimize your airline operations?",
    ctaButtonText: "Talk to Our Team",
    ctaButtonLink: "/contact?industry=airlines",
    seoTitle: "AI for Airlines | Yumesorai",
    seoDescription:
      "Intelligent AI solutions for airlines. Predictive maintenance, revenue optimization, and compliance-ready operations.",
  },
  {
    _id: "industry-banking",
    _type: "industryPage",
    title: "AI Solutions for Banking",
    slug: { _type: "slug", current: "banking" },
    industry: "banking",
    heroHeadline: "Secure, Compliant AI for Modern Banking",
    heroSubtext:
      "Yumesorai helps banks and financial institutions deploy AI for fraud detection, risk management, and customer experience while meeting PCI-DSS and SOC 2 requirements.",
    challenges: [
      {
        _key: "c1",
        title: "Fraud & Financial Crime",
        description:
          "Increasingly sophisticated fraud requires real-time AI detection without generating excessive false positives.",
        icon: "lock",
      },
      {
        _key: "c2",
        title: "Regulatory Burden",
        description:
          "OCC, FDIC, and international regulators demand explainability and fairness in AI-driven lending and risk decisions.",
        icon: "file-text",
      },
      {
        _key: "c3",
        title: "Legacy Infrastructure",
        description:
          "Core banking systems often run on decades-old technology that is difficult to integrate with modern AI.",
        icon: "server",
      },
    ],
    solutions: [
      {
        _key: "s1",
        title: "Real-Time Fraud Detection",
        description:
          "Adaptive ML models that detect fraudulent transactions in milliseconds with minimal false positives.",
        benefits: [
          "Sub-100ms decision latency",
          "Reduces false positives by 60%",
          "Continuous model retraining",
        ],
      },
      {
        _key: "s2",
        title: "AI-Powered Risk Assessment",
        description:
          "Explainable credit scoring and risk models that satisfy regulatory requirements for fairness and transparency.",
        benefits: [
          "Model interpretability reports",
          "Bias detection and mitigation",
          "Integrates with existing decisioning engines",
        ],
      },
    ],
    complianceRequirements: [
      { _type: "reference", _ref: "cert-pci-dss", _key: "ref1" },
      { _type: "reference", _ref: "cert-soc2", _key: "ref2" },
    ],
    caseStudyExcerpt:
      "A top-20 US bank reduced fraud losses by $12M annually using our real-time detection platform while cutting false positive rates in half.",
    ctaHeadline: "Ready to modernize your bank's AI capabilities?",
    ctaButtonText: "Request a Briefing",
    ctaButtonLink: "/contact?industry=banking",
    seoTitle: "AI for Banking | Yumesorai",
    seoDescription:
      "PCI-DSS compliant AI for banking. Fraud detection, risk management, and regulatory compliance built in.",
  },

  // ───── Blog Posts ─────
  {
    _id: "blog-1",
    _type: "blogPost",
    title: "Why Compliance-First AI Wins in Regulated Industries",
    slug: { _type: "slug", current: "compliance-first-ai-regulated-industries" },
    author: { _type: "reference", _ref: "author-placeholder-1" },
    publishDate: "2026-05-01T09:00:00Z",
    excerpt:
      "Organizations that build compliance into their AI strategy from day one avoid costly retrofits and accelerate time to production.",
    content: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Regulated industries face a unique challenge: they must innovate with AI while satisfying complex compliance frameworks. Organizations that treat compliance as an afterthought often find themselves rebuilding models, rewriting documentation, and delaying launches by months. A compliance-first approach embeds regulatory requirements into every stage of the AI lifecycle, from data collection to model deployment and monitoring.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "The Cost of Retrofitting Compliance" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "A recent study found that organizations spending less than 10% of their AI budget on compliance upfront ended up spending 3x more on remediation. Data lineage, model explainability, and audit trails are far cheaper to implement during development than after deployment.",
          },
        ],
        markDefs: [],
      },
    ],
    tags: ["compliance", "AI strategy", "regulated industries"],
    industry: "general",
  },
  {
    _id: "blog-2",
    _type: "blogPost",
    title: "How Predictive Maintenance is Reshaping Airline Operations",
    slug: { _type: "slug", current: "predictive-maintenance-airline-operations" },
    author: { _type: "reference", _ref: "author-placeholder-1" },
    publishDate: "2026-04-15T09:00:00Z",
    excerpt:
      "Airlines that adopt predictive maintenance AI are seeing 20-30% reductions in unscheduled downtime and significant cost savings.",
    content: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "The airline industry operates on razor-thin margins where every minute of unscheduled downtime costs thousands of dollars. Predictive maintenance powered by machine learning is transforming how carriers manage their fleets, shifting from reactive repairs to proactive component management.",
          },
        ],
        markDefs: [],
      },
    ],
    tags: ["airlines", "predictive maintenance", "operations"],
    industry: "airlines",
  },
  {
    _id: "blog-3",
    _type: "blogPost",
    title: "AI in Banking: Balancing Innovation with Regulatory Requirements",
    slug: { _type: "slug", current: "ai-banking-innovation-regulation" },
    author: { _type: "reference", _ref: "author-placeholder-1" },
    publishDate: "2026-03-28T09:00:00Z",
    excerpt:
      "Banks that embrace explainable AI and robust governance frameworks are winning both regulator approval and customer trust.",
    content: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Financial institutions are under dual pressure: customers expect AI-powered personalization and instant decisions, while regulators demand transparency, fairness, and accountability. The banks succeeding at this balancing act share a common trait: they invest in governance frameworks that make AI explainability a core feature rather than a compliance checkbox.",
          },
        ],
        markDefs: [],
      },
    ],
    tags: ["banking", "regulation", "explainable AI"],
    industry: "banking",
  },

  // ───── Pre-Built Assets ─────
  {
    _id: "asset-1",
    _type: "preBuiltAsset",
    name: "HIPAA Compliance Checklist for AI Projects",
    slug: { _type: "slug", current: "hipaa-compliance-checklist" },
    description:
      "A comprehensive checklist covering all HIPAA requirements for AI/ML projects in healthcare, including data handling, model training, and deployment considerations.",
    category: "template",
    industry: "healthcare",
    features: [
      "PHI data handling guidelines",
      "Model training compliance steps",
      "Deployment audit checklist",
      "BAA template references",
    ],
    techStack: ["PDF", "Notion"],
  },
  {
    _id: "asset-2",
    _type: "preBuiltAsset",
    name: "AI ROI Calculator Framework",
    slug: { _type: "slug", current: "ai-roi-calculator-framework" },
    description:
      "Spreadsheet-based framework for calculating expected ROI from AI implementations, with built-in formulas for cost reduction, revenue uplift, and productivity gains.",
    category: "framework",
    industry: "cross-industry",
    features: [
      "Pre-built financial models",
      "Industry-specific benchmarks",
      "Sensitivity analysis",
      "Executive presentation template",
    ],
    techStack: ["Excel", "Google Sheets"],
  },
  {
    _id: "asset-3",
    _type: "preBuiltAsset",
    name: "Fraud Detection Starter Kit",
    slug: { _type: "slug", current: "fraud-detection-starter-kit" },
    description:
      "Pre-configured ML pipeline for transaction fraud detection, including feature engineering templates, model evaluation notebooks, and deployment scripts.",
    category: "accelerator",
    industry: "banking",
    features: [
      "Feature engineering templates",
      "Model evaluation notebooks",
      "Real-time scoring API",
      "Alert management dashboard",
    ],
    techStack: ["Python", "scikit-learn", "FastAPI", "Docker"],
  },
  {
    _id: "asset-4",
    _type: "preBuiltAsset",
    name: "Airline Disruption Recovery Playbook",
    slug: { _type: "slug", current: "airline-disruption-recovery-playbook" },
    description:
      "Step-by-step operational playbook for using AI to manage irregular operations, including crew reassignment, rebooking, and passenger communications.",
    category: "template",
    industry: "airlines",
    features: [
      "IROPS decision trees",
      "Crew reassignment workflows",
      "Passenger communication templates",
      "Recovery KPI dashboards",
    ],
    techStack: ["PDF", "Miro"],
  },
  {
    _id: "asset-5",
    _type: "preBuiltAsset",
    name: "Data Governance Policy Generator",
    slug: { _type: "slug", current: "data-governance-policy-generator" },
    description:
      "Interactive tool that generates customized data governance policies based on your industry, data types, and regulatory requirements.",
    category: "tool",
    industry: "cross-industry",
    features: [
      "Industry-specific templates",
      "Regulatory mapping (HIPAA, PCI-DSS, SOC 2)",
      "Role-based access policies",
      "Data classification framework",
    ],
    techStack: ["Web App", "React", "Node.js"],
  },

  // ───── Executive Briefs ─────
  {
    _id: "brief-1",
    _type: "executiveBrief",
    title: "The State of AI in Healthcare 2026",
    slug: { _type: "slug", current: "state-of-ai-healthcare-2026" },
    description:
      "A comprehensive overview of AI adoption trends in healthcare, covering clinical AI, administrative automation, and compliance challenges facing health systems today.",
    industry: "healthcare",
    gateEmail: true,
    publishDate: "2026-04-01T00:00:00Z",
  },
  {
    _id: "brief-2",
    _type: "executiveBrief",
    title: "Banking AI Readiness Assessment",
    slug: { _type: "slug", current: "banking-ai-readiness-assessment" },
    description:
      "A self-assessment framework for banking executives to evaluate their organization's readiness for AI adoption across risk, operations, and customer experience.",
    industry: "banking",
    gateEmail: true,
    publishDate: "2026-03-15T00:00:00Z",
  },
];

async function seed() {
  console.log(`Seeding ${documents.length} documents...`);

  const transaction = client.transaction();
  for (const doc of documents) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transaction.createOrReplace(doc as any);
  }

  const result = await transaction.commit();
  console.log(`Done! Transaction ID: ${result.transactionId}`);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
