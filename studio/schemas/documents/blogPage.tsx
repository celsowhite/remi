import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default defineType({
  title: 'Page',
  name: 'blogPage',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        urlPrefix: '/',
      },
      readOnly: true,
    },
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
