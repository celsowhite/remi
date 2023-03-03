export default {
  title: 'Card',
  name: 'card',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    },
    {title: 'Title', name: 'title', type: 'string'},
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
    },
  ],
}
