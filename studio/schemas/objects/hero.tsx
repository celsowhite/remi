import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    }),
    defineField({
      title: 'Mobile Image',
      name: 'mobile_image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    }),
    defineField({title: 'Eyebrow', name: 'eyebrow', type: 'string'}),
    defineField({title: 'Title', name: 'title', type: 'string'}),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
    }),
    defineField({
      title: 'Content Position',
      name: 'contentPosition',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Hero',
      }
    },
  },
})
