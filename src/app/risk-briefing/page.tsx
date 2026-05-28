import type { Metadata } from "next";
import RiskBriefingForm from "./risk-briefing-form";

export const metadata: Metadata = {
  title: "Risk Briefing | Yumesorai",
  description:
    "Get a personalized risk assessment briefing for your industry-specific legacy modernization challenges.",
  keywords: [
    "risk briefing",
    "assessment",
    "legacy modernization",
    "transformation",
  ],
  openGraph: {
    title: "Risk Briefing | Yumesorai",
    description:
      "Get a personalized risk assessment briefing for your industry.",
    url: "https://www.yumesorai.com/risk-briefing",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Risk Briefing | Yumesorai",
    description: "Get a personalized risk assessment briefing for your industry.",
  },
  alternates: {
    canonical: "https://www.yumesorai.com/risk-briefing",
  },
};

export default function RiskBriefingPage() {
  return <RiskBriefingForm />;
}
