import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Embed',
  name: 'embedSection',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      title: 'Embed',
      name: 'embed',
      type: 'embed',
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Embed',
      }
    },
  },
})
