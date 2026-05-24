export { client, previewClient, getClient } from "./client";
export { urlFor } from "./image";
export {
  REVALIDATE_INTERVAL,
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostsByIndustry,
  getRecentBlogPosts,
  getAllIndustryPages,
  getIndustryPageBySlug,
  getIndustryPageByIndustry,
  getAllExecutiveBriefs,
  getExecutiveBriefBySlug,
  getAllPreBuiltAssets,
  getPreBuiltAssetsByCategory,
  getPreBuiltAssetsByIndustry,
  getAllComplianceCerts,
  getComplianceCertsByIndustry,
  getAuthorBySlug,
  getAllBlogSlugs,
  getAllIndustrySlugs,
} from "./queries";
