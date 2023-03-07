import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Social Settings',
  name: 'social_settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      title: 'Twitter Handle',
      name: 'twitter_handle',
      type: 'string',
    }),
  ],
})
