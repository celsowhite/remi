import {CogIcon, ControlsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Social Settings',
  name: 'socialSettings',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      title: 'Profiles',
      name: 'profiles',
      type: 'array',
      of: [
        {
          type: 'socialProfile',
        },
      ],
    }),
    defineField({
      title: 'Twitter Handle',
      name: 'twitterHandle',
      type: 'string',
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Social',
      }
    },
  },
})
