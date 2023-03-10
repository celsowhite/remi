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
      name: 'page_builder',
      type: 'array',
      of: [
        defineArrayMember({type: 'rich_text'}),
        defineArrayMember({type: 'embed'}),
        defineArrayMember({type: 'image_text_panel'}),
        defineArrayMember({type: 'card_grid'}),
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
        defineArrayMember({type: 'text_banner'}),
        defineArrayMember({type: 'hero'}),
        defineArrayMember({type: 'section_header'}),
      ],
    }),
    defineField({
      title: 'Featured Image',
      name: 'featured_image',
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
            type: 'post_tag',
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
