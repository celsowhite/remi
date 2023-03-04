import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'internal',
    }),
    defineField({
      title: 'Internal Link',
      name: 'internal',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent, value}) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'external',
      title: 'External URL',
      type: 'url',
      hidden: ({parent, value}) => parent?.type !== 'external',
    }),
  ],
})
