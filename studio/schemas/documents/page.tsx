import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon, ImageIcon} from '@sanity/icons'

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: DocumentTextIcon,
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
        defineArrayMember({type: 'wysiwyg'}),
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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})