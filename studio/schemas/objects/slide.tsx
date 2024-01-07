import {BlockElementIcon} from '@sanity/icons'
import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  title: 'Slide',
  name: 'slide',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt', name: 'alt', type: 'string'}],
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          lists: [],
        }),
      ],
    },
  ],
})
