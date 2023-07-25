import {DocumentTextIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import richTextField from '../partials/richTextField'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Multi Column Rich Text',
  name: 'multiColumnRichText',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: 'Columns',
      name: 'columns',
      type: 'number',
      options: {
        list: [1, 2, 3, 4],
        layout: 'dropdown',
      },
    }),
    defineField({
      title: 'Text Blocks',
      name: 'textBlocks',
      type: 'array',
      of: [
        {
          type: 'richText',
        },
      ],
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Multi Column Rich Text',
      }
    },
  },
})
