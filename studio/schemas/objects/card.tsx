import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Card',
  name: 'card',
  type: 'object',
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    }),
    defineField({title: 'Title', name: 'title', type: 'string'}),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
    }),
  ],
})
