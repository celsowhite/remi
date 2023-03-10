import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Page Hero',
  name: 'page_hero',
  type: 'object',
  icon: BlockElementIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      title: 'Hero Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Title', value: 'title'},
          {title: 'Image', value: 'image'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'title',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Optional. If no title is entered then the page title will be used.',
      hidden: ({parent, value}) => parent?.type !== 'title',
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(250),
      hidden: ({parent, value}) => parent?.type !== 'title',
    }),
    defineField({
      title: 'Hero',
      name: 'hero',
      type: 'hero',
      hidden: ({parent, value}) => parent?.type !== 'image',
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Hero',
        media: BlockElementIcon,
      }
    },
  },
})
