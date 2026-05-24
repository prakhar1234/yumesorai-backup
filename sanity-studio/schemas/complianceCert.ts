import { defineField, defineType } from "sanity";

export default defineType({
  name: "complianceCert",
  title: "Compliance Certification",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Certification Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "E.g., SOC 2 Type II, HIPAA, PCI-DSS, GDPR",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
    }),
    defineField({
      name: "industries",
      title: "Relevant Industries",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Healthcare", value: "healthcare" },
          { title: "Airlines", value: "airlines" },
          { title: "Banking", value: "banking" },
        ],
      },
    }),
    defineField({
      name: "certificationUrl",
      title: "Certification Details URL",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "name", media: "icon" },
  },
});
