import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'string',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
  ],
})
