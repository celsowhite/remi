import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  type: 'document',
  title: 'Menu',
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
      of: [{type: 'menu_items'}],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
