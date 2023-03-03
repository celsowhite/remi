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
    prepare(selection) {
      return {
        title: 'Accordions',
      }
    },
  },
}
