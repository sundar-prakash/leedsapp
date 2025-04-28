import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const porductGuideType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
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
