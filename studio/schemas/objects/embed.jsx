import {CodeIcon} from '@sanity/icons'

export default {
  title: 'Embed',
  name: 'embed',
  icon: CodeIcon,
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Code',
      name: 'code',
      type: 'text',
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: CodeIcon,
      }
    },
  },
}
