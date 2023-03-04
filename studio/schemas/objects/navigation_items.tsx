import {defineType} from 'sanity'

export default defineType({
  name: 'navigation_items',
  type: 'object',
  title: 'Items',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      type: 'link',
      name: 'link',
      title: 'Link',
    },
    {
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{type: 'navigation_item'}],
    },
  ],
})
