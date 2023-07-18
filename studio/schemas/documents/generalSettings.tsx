import {ControlsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'General Settings',
  name: 'generalSettings',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Site URL',
      name: 'siteUrl',
      type: 'url',
    }),
    defineField({
      title: 'Google Analytics ID',
      name: 'googleAnalyticsId',
      type: 'string',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }),
  ],
})
