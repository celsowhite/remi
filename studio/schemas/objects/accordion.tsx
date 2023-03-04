import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Accordion',
  name: 'accordion',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'wysiwyg',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: BlockElementIcon,
      }
    },
  },
})
