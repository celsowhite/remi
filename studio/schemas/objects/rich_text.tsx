import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  title: 'Rich Text',
  name: 'rich_text',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    {
      title: 'Content',
      name: 'content',
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
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Rich Text',
      }
    },
  },
})
