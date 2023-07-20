import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Link List',
  name: 'linkList',
  icon: LinkIcon,
  type: 'object',
  fields: [
    defineField({
      title: 'Columns',
      name: 'columns',
      type: 'number',
      options: {
        list: [1, 2, 3, 4],
        layout: 'dropdown',
      },
      initialValue: 2,
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'object',
          icon: LinkIcon,
          fields: [
            defineField({
              title: 'Text',
              name: 'text',
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
          ],
        },
      ],
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Link List',
      }
    },
  },
})
