import {defineArrayMember, defineField, defineType} from 'sanity'
import {FolderIcon, ImageIcon} from '@sanity/icons'
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
      title: 'Page Hero',
      name: 'pageHero',
      type: 'pageHero',
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
        defineArrayMember({type: 'postList'}),
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
        urlPrefix: '/',
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
