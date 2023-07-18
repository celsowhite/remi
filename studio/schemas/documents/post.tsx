import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentsIcon, DocumentTextIcon, ImageIcon} from '@sanity/icons'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'array',
      of: [
        defineArrayMember({type: 'richText'}),
        defineArrayMember({type: 'embed'}),
        defineArrayMember({type: 'imageTextPanel'}),
        defineArrayMember({type: 'cardGrid'}),
        defineArrayMember({
          title: 'Image',
          name: 'image',
          type: 'image',
          icon: ImageIcon,
          fields: [
            {title: 'Alt', name: 'alt', type: 'string'},
            {title: 'Caption', name: 'caption', type: 'string'},
          ],
        }),
        defineArrayMember({type: 'accordions'}),
        defineArrayMember({type: 'textBanner'}),
        defineArrayMember({type: 'hero'}),
        defineArrayMember({type: 'sectionHeader'}),
      ],
    }),
    defineField({
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(250),
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'postTag',
          },
        },
      ],
    }),
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        source: 'title',
        urlPrefix: '/blog/',
      },
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
