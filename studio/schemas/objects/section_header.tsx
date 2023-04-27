import {InsertBelowIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Section Header',
  name: 'section_header',
  type: 'object',
  icon: InsertBelowIcon,
  fields: [
    defineField({title: 'Title', name: 'title', type: 'string'}),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
    defineField({
      title: 'Content Position',
      name: 'content_position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
        ],
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Section Header',
      }
    },
  },
})
