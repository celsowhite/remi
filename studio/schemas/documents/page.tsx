import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon, FolderIcon, ImageIcon} from '@sanity/icons'
import slugAsPath from '../../functions/slug-as-path'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: FolderIcon,
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
        defineArrayMember({type: 'post_list'}),
      ],
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        source: 'title',
        urlPrefix: '/',
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
