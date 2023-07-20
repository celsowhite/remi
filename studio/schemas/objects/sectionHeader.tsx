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
      title: 'Title Tag',
      name: 'titleTag',
      type: 'string',
      options: {
        list: [
          {title: 'h1', value: 'h1'},
          {title: 'h2', value: 'h2'},
          {title: 'h3', value: 'h3'},
          {title: 'h4', value: 'h4'},
          {title: 'h5', value: 'h5'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'h2',
    }),
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
