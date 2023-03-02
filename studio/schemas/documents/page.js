import {MdTextSnippet} from 'react-icons/md'

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
      of: [{type: 'content_block'}],
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
