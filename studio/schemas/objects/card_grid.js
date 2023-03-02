import {MdGridView} from 'react-icons/md'

export default {
  title: 'Card Grid',
  name: 'card_grid',
  icon: MdGridView,
  type: 'object',
  fields: [
    {
      title: 'Columns',
      name: 'columns',
      type: 'number',
      options: {
        list: [2, 3, 4],
        layout: 'dropdown',
      },
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'card',
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Card Grid',
      }
    },
  },
}
