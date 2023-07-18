import {defineField, defineArrayMember} from 'sanity'

const basicRichText = defineField({
  title: 'Text',
  name: 'text',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
    }),
  ],
})

export default basicRichText
