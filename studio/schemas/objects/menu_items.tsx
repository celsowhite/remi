import {LinkIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export default defineType({
  name: 'menu_items',
  type: 'object',
  title: 'Items',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      type: 'link',
      name: 'link',
      title: 'Link',
    },
    {
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{type: 'menu_item'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: LinkIcon,
      }
    },
  },
})
