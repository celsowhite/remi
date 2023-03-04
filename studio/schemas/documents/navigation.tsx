import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [{type: 'navigation_items'}],
    }),
    defineField({
      name: 'id',
      type: 'slug',
      title: 'ID',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
