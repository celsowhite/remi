import {BlockContentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Image Text Panel',
  name: 'imageTextPanel',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({title: 'Eyebrow', name: 'eyebrow', type: 'string'}),
    defineField({title: 'Title', name: 'title', type: 'string'}),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    }),
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
    }),
    defineField({
      title: 'Image Position',
      name: 'imagePosition',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
    }),
    sectionIdField,
  ],
})
