import {BlockElementIcon} from '@sanity/icons'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    },
    {title: 'Eyebrow', name: 'eyebrow', type: 'string'},
    {title: 'Title', name: 'title', type: 'string'},
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
    },
    {
      title: 'Content Position',
      name: 'content_position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Hero',
        media: BlockElementIcon,
      }
    },
  },
}
