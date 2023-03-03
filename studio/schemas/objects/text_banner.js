import {MdOutlineImage} from 'react-icons/md'

export default {
  title: 'Text Banner',
  name: 'text_banner',
  type: 'object',
  icon: MdOutlineImage,
  fields: [
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
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Text Banner',
      }
    },
  },
}
