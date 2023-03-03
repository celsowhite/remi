import {MenuIcon} from '@sanity/icons'

export default {
  title: 'Accordions',
  name: 'accordions',
  type: 'object',
  icon: MenuIcon,
  fields: [
    {
      title: 'Accordions',
      name: 'accordions',
      type: 'array',
      of: [
        {
          type: 'accordion',
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Accordions',
        media: MenuIcon,
      }
    },
  },
}
