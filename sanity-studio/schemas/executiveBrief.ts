import { defineField, defineType } from "sanity";

export default defineType({
  name: "executiveBrief",
  title: "Executive Brief",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
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
      name: "pdfUrl",
      title: "PDF URL",
      type: "url",
      description: "Link to the downloadable PDF",
    }),
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: { accept: ".pdf" },
      description: "Or upload the PDF directly",
    }),
    defineField({
      name: "gateEmail",
      title: "Require Email to Download",
      type: "boolean",
      initialValue: true,
      description: "If true, user must provide email before downloading",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "industry",
      media: "coverImage",
    },
  },
});
