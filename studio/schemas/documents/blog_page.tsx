import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon, ImageIcon} from '@sanity/icons'

export default defineType({
  title: 'Page',
  name: 'blog_page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      initialValue: {
        current: '/blog',
      },
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
