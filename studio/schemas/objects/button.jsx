export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    },
  ],
}
