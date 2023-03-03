import {BlockContentIcon} from '@sanity/icons'

export default {
  title: 'Image Text Panel',
  name: 'image_text_panel',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {title: 'Eyebrow', name: 'eyebrow', type: 'string'},
    {title: 'Title', name: 'title', type: 'string'},
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
    },
    {
      title: 'Image Position',
      name: 'image_position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Image Text Panel',
        media: BlockContentIcon,
      }
    },
  },
}
