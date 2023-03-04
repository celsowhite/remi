import {CodeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Embed',
  name: 'embed',
  icon: CodeIcon,
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Code',
      name: 'code',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: CodeIcon,
      }
    },
  },
})
