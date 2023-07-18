import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Text Banner',
  name: 'textBanner',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({title: 'Eyebrow', name: 'eyebrow', type: 'string'}),
    defineField({title: 'Title', name: 'title', type: 'string'}),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Text Banner',
      }
    },
  },
})
