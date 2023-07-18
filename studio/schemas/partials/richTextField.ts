import {defineField, defineArrayMember} from 'sanity'

const richTextField = defineField({
  title: 'Text',
  name: 'text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'image',
      title: 'Image',
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
    }),
    defineArrayMember({
      type: 'embed',
    }),
  ],
})

export default richTextField
