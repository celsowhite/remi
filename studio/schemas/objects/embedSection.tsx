import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Embed',
  name: 'embedSection',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      title: 'Embed',
      name: 'embed',
      type: 'embed',
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Embed',
      }
    },
  },
})
