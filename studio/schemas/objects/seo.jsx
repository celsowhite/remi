export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(155),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Ideal size 1200 x 630px.',
      fields: [
        {
          title: 'Alt',
          name: 'alt',
          type: 'string',
        },
      ],
    },
  ],
}
