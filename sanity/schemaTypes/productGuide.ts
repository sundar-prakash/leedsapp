import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const porductGuideType = defineType({
  name: "productGuide",
  title: "Product Guide Feedback",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
    }),
    defineField({
      name: "Slug",
      title: "slug",
      type: "string",
    }),
    defineField({
      name: "helpfulCount",
      title: "Helpful Count",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "notHelpfulCount",
      title: "Not Helpful Count",
      type: "number",
      initialValue: 0,
    }),
  ],
});
