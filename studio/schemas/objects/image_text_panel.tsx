import {BlockContentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Image Text Panel',
  name: 'image_text_panel',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({title: 'Eyebrow', name: 'eyebrow', type: 'string'}),
    defineField({title: 'Title', name: 'title', type: 'string'}),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
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
      name: 'image_position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Image Text Panel',
      }
    },
  },
})
