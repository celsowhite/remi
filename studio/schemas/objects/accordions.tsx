import {MenuIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

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
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Accordions',
      }
    },
  },
})
