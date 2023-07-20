import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Button',
  name: 'buttonSection',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
    }),
    defineField({
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'center',
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Button',
      }
    },
  },
})
