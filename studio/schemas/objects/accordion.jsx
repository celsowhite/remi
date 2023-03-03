import {BlockElementIcon} from '@sanity/icons'

export default {
  title: 'Accordion',
  name: 'accordion',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'wysiwyg',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: BlockElementIcon,
      }
    },
  },
}
