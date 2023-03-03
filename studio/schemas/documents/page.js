import {MdTextSnippet, MdOutlineImage} from 'react-icons/md'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: MdTextSnippet,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Page Builder',
      name: 'page_builder',
      type: 'array',
      of: [
        {type: 'wysiwyg'},
        {type: 'embed'},
        {type: 'image_text_panel'},
        {type: 'card_grid'},
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          icon: MdOutlineImage,
          fields: [
            {title: 'Alt', name: 'alt', type: 'string'},
            {title: 'Caption', name: 'caption', type: 'string'},
          ],
        },
        {type: 'accordions'},
        {type: 'text_banner'},
        {type: 'hero'},
        {type: 'section_header'},
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
}
