import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu_item',
  type: 'object',
  title: 'Item',
  icon: LinkIcon,
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
