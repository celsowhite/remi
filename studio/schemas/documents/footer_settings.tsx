import {ControlsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'FooterSettings',
  name: 'footer_settings',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      title: 'Footer Menu 1',
      name: 'footer_menu_1',
      type: 'reference',
      to: [{type: 'menu'}],
    }),
    defineField({
      title: 'Footer Menu 2',
      name: 'footer_menu_2',
      type: 'reference',
      to: [{type: 'menu'}],
    }),
    defineField({
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Footer',
      }
    },
  },
})
