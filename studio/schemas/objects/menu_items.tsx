import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu_items',
  type: 'object',
  title: 'Items',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      type: 'link',
      name: 'link',
      title: 'Link',
    }),
    defineField({
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{type: 'menu_item'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
      }
    },
  },
})
