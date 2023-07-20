import {InsertBelowIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Section Header',
  name: 'sectionHeader',
  type: 'object',
  icon: InsertBelowIcon,
  fields: [
    defineField({title: 'Title', name: 'title', type: 'string'}),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Content Position',
      name: 'contentPosition',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'left',
    }),
    sectionIdField,
  ],
})
