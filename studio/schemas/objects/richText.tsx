import {DocumentTextIcon} from '@sanity/icons'
import {defineType} from 'sanity'
import richTextField from '../partials/richTextField'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [richTextField, sectionIdField],
  preview: {
    prepare(selection) {
      return {
        title: 'Rich Text',
      }
    },
  },
})
