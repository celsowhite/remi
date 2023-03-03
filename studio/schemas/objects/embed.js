import {MdCode} from 'react-icons/md'

export default {
  title: 'Embed',
  name: 'embed',
  icon: MdCode,
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
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
    prepare(selection) {
      return {
        title: 'Embed',
      }
    },
  },
}
