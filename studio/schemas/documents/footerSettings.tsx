import {ControlsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'FooterSettings',
  name: 'footerSettings',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      title: 'Footer Menu 1',
      name: 'footerMenu1',
      type: 'reference',
      to: [{type: 'menu'}],
    }),
    defineField({
      title: 'Footer Menu 2',
      name: 'footerMenu2',
      type: 'reference',
      to: [{type: 'menu'}],
    }),
    defineField({
      title: 'Byline',
      name: 'byline',
      type: 'richText',
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
