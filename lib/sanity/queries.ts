import { groq } from "next-sanity";
import { client, getClient } from "./client";

// ---------- Revalidation config for ISR ----------
export const REVALIDATE_INTERVAL = 60; // seconds

// ---------- Blog Post Queries ----------

const blogPostFields = groq`
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  mainImage,
  "author": author->{name, slug, role, avatar},
  tags,
  industry
`;

export async function getAllBlogPosts(preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "blogPost"] | order(publishDate desc) {
      ${blogPostFields}
    }`
  );
}

export async function getBlogPostBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0] {
      ${blogPostFields},
      content
    }`,
    { slug }
  );
}

export async function getBlogPostsByIndustry(industry: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "blogPost" && industry == $industry] | order(publishDate desc) {
      ${blogPostFields}
    }`,
    { industry }
  );
}

export async function getRecentBlogPosts(limit = 3, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "blogPost"] | order(publishDate desc)[0...$limit] {
      ${blogPostFields}
    }`,
    { limit: limit - 1 }
  );
}

// ---------- Industry Page Queries ----------

const industryPageFields = groq`
  _id,
  title,
  "slug": slug.current,
  industry,
  heroHeadline,
  heroSubtext,
  heroImage,
  challenges,
  solutions,
  "complianceRequirements": complianceRequirements[]->{
    _id, name, shortDescription, "slug": slug.current, industries
  },
  caseStudyExcerpt,
  ctaHeadline,
  ctaButtonText,
  ctaButtonLink,
  seoTitle,
  seoDescription
`;

export async function getAllIndustryPages(preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "industryPage"] {
      ${industryPageFields}
    }`
  );
}

export async function getIndustryPageBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "industryPage" && slug.current == $slug][0] {
      ${industryPageFields}
    }`,
    { slug }
  );
}

export async function getIndustryPageByIndustry(industry: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "industryPage" && industry == $industry][0] {
      ${industryPageFields}
    }`,
    { industry }
  );
}

// ---------- Executive Brief Queries ----------

export async function getAllExecutiveBriefs(preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "executiveBrief"] | order(publishDate desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      industry,
      pdfUrl,
      gateEmail,
      coverImage,
      publishDate
    }`
  );
}

export async function getExecutiveBriefBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "executiveBrief" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      industry,
      pdfUrl,
      pdfFile,
      gateEmail,
      coverImage,
      publishDate
    }`,
    { slug }
  );
}

// ---------- Pre-Built Asset Queries ----------

export async function getAllPreBuiltAssets(preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "preBuiltAsset"] {
      _id,
      name,
      "slug": slug.current,
      description,
      category,
      industry,
      url,
      thumbnail,
      features,
      techStack
    }`
  );
}

export async function getPreBuiltAssetsByCategory(category: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "preBuiltAsset" && category == $category] {
      _id,
      name,
      "slug": slug.current,
      description,
      category,
      industry,
      url,
      thumbnail,
      features,
      techStack
    }`,
    { category }
  );
}

export async function getPreBuiltAssetsByIndustry(industry: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "preBuiltAsset" && industry == $industry] {
      _id,
      name,
      "slug": slug.current,
      description,
      category,
      industry,
      url,
      thumbnail,
      features,
      techStack
    }`,
    { industry }
  );
}

// ---------- Compliance Cert Queries ----------

export async function getAllComplianceCerts(preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "complianceCert"] {
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      industries
    }`
  );
}

export async function getComplianceCertsByIndustry(industry: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "complianceCert" && $industry in industries] {
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      fullDescription,
      industries,
      certificationUrl
    }`,
    { industry }
  );
}

// ---------- Author Queries ----------

export async function getAuthorBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(
    groq`*[_type == "author" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      role,
      bio,
      avatar,
      linkedin
    }`,
    { slug }
  );
}

// ---------- Slug helpers (for generateStaticParams) ----------

export async function getAllBlogSlugs() {
  return client.fetch<{ slug: string }[]>(
    groq`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`
  );
}

export async function getAllIndustrySlugs() {
  return client.fetch<{ slug: string }[]>(
    groq`*[_type == "industryPage" && defined(slug.current)]{ "slug": slug.current }`
  );
}
