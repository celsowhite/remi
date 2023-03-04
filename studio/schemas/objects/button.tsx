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
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    }),
  ],
})
