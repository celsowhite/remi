export default {
  title: 'Accordions',
  name: 'accordions',
  type: 'object',
  fields: [
    {
      title: 'Accordions',
      name: 'accordions',
      type: 'array',
      of: [
        {
          type: 'accordion',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: 'Accordions',
      }
    },
  },
}
