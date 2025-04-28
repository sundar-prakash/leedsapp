// schemas/feedback.ts

import { defineType, defineField } from 'sanity'

export  const FeedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'helpfulCount',
      title: 'Helpful Count',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'notHelpfulCount',
      title: 'Not Helpful Count',
      type: 'number',
      initialValue: 0
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      helpful: 'helpfulCount',
      notHelpful: 'notHelpfulCount'
    },
    prepare(selection) {
      const { title, slug, helpful, notHelpful } = selection
      return {
        title: title || slug,
        subtitle: `👍 ${helpful || 0} | 👎 ${notHelpful || 0}`
      }
    }
  }
})
