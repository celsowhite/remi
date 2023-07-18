import {DocumentTextIcon} from '@sanity/icons'
import {defineType} from 'sanity'
import richTextField from '../partials/richTextField'

export default defineType({
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [richTextField],
  preview: {
    prepare(selection) {
      return {
        title: 'Rich Text',
      }
    },
  },
})
