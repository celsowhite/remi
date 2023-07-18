import {ThLargeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Card Grid',
  name: 'cardGrid',
  icon: ThLargeIcon,
  type: 'object',
  fields: [
    defineField({
      title: 'Columns',
      name: 'columns',
      type: 'number',
      options: {
        list: [2, 3, 4],
        layout: 'dropdown',
      },
    }),
    defineField({
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'card',
        },
      ],
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Card Grid',
      }
    },
  },
})
