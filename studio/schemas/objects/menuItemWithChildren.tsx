import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuItemWithChildren',
  type: 'object',
  title: 'Items',
  icon: LinkIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    }),
    defineField({
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{type: 'menuItem'}],
    }),
  ],
})
