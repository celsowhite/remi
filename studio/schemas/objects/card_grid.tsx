import {ThLargeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Card Grid',
  name: 'card_grid',
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
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Card Grid',
        media: ThLargeIcon,
      }
    },
  },
})
