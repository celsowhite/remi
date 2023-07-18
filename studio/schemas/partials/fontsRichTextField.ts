import {defineField, defineArrayMember} from 'sanity'

const fontsRichText = defineField({
  title: 'Text',
  name: 'text',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      lists: [],
    }),
  ],
})

export default fontsRichText
