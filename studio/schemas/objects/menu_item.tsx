import {LinkIcon} from '@sanity/icons'

export default {
  name: 'menu_item',
  type: 'object',
  title: 'Item',
  icon: LinkIcon,
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: LinkIcon,
      }
    },
  },
}
