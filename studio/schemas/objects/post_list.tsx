import {ThLargeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Post List',
  name: 'post_list',
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
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Post List',
      }
    },
  },
})
