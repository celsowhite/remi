import {ControlsIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'General Settings',
  name: 'general_settings',
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
      name: 'site_url',
      type: 'url',
    }),
    defineField({
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }),
  ],
})
