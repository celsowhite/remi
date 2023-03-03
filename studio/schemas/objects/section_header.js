import {MdOutlineImage} from 'react-icons/md'

export default {
  title: 'Section Header',
  name: 'section_header',
  type: 'object',
  icon: MdOutlineImage,
  fields: [
    {title: 'Title', name: 'title', type: 'string'},
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: 'Content Position',
      name: 'content_position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
        ],
        layout: 'dropdown',
      },
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Section Header',
      }
    },
  },
}
