import {ControlsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Header Settings',
  name: 'header_settings',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      title: 'Menu',
      name: 'menu',
      type: 'reference',
      to: [{type: 'menu'}],
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Header',
      }
    },
  },
})
