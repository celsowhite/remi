export default {
  name: 'navigation_item',
  type: 'object',
  title: 'Item',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      type: 'link',
      name: 'link',
      title: 'Link',
    },
  ],
}
