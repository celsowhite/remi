import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Site Settings',
  name: 'site_settings',
  type: 'document',
  icon: CogIcon,
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
      title: 'Twitter Handle',
      name: 'twitter_handle',
      type: 'string',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }),
  ],
})
