import { defineField, defineType } from "sanity";

export default defineType({
  name: "preBuiltAsset",
  title: "Pre-Built Asset",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Asset Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Template", value: "template" },
          { title: "Framework", value: "framework" },
          { title: "Tool", value: "tool" },
          { title: "Accelerator", value: "accelerator" },
          { title: "Integration", value: "integration" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "Healthcare", value: "healthcare" },
          { title: "Airlines", value: "airlines" },
          { title: "Banking", value: "banking" },
          { title: "Cross-Industry", value: "cross-industry" },
        ],
      },
    }),
    defineField({
      name: "url",
      title: "External URL",
      type: "url",
      description: "Link to the asset (e.g., GitHub repo, demo)",
    }),
    defineField({
      name: "attachment",
      title: "File Attachment",
      type: "file",
      description: "Or upload the asset directly",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
