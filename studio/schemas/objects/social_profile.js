import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Social Profile',
  name: 'social_profile',
  type: 'object',
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
          {title: 'Vimeo', value: 'vimeo'},
          {title: 'Tiktok', value: 'tiktok'},
          {title: 'Facebook', value: 'facebook'},
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
