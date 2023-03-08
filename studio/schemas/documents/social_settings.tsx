import {CogIcon, ControlsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Social Settings',
  name: 'social_settings',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      title: 'Profiles',
      name: 'profiles',
      type: 'array',
      of: [
        {
          type: 'social_profile',
        },
      ],
    }),
    defineField({
      title: 'Twitter Handle',
      name: 'twitter_handle',
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
