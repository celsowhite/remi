import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import richTextField from '../partials/richTextField'

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
    richTextField,
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
