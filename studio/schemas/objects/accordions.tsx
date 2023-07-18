import {MenuIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Accordions',
  name: 'accordions',
  type: 'object',
  icon: MenuIcon,
  fields: [
    defineField({
      title: 'Accordions',
      name: 'accordions',
      type: 'array',
      of: [
        {
          type: 'accordion',
        },
      ],
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Accordions',
      }
    },
  },
})
