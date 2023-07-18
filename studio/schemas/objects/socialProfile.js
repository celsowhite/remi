import {defineType, defineField} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
  title: 'Social Profile',
  name: 'socialProfile',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      title: 'Network',
      name: 'network',
      type: 'string',
      options: {
        list: [
          {title: 'Twitter', value: 'twitter'},
          {title: 'Linkedin', value: 'linkedin'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Youtube', value: 'youtube'},
          {title: 'Tiktok', value: 'tiktok'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Github', value: 'github'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: false,
        }),
    }),
  ],
})
