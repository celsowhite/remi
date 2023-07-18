import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon, FolderIcon, ImageIcon} from '@sanity/icons'
import {SlugInput} from 'sanity-plugin-prefixed-slug'
import pageBuilderField from '../partials/pageBuilderField'

export default defineType({
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    pageBuilderField,
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
