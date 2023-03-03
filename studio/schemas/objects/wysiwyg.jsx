import {DocumentTextIcon} from '@sanity/icons'

export default {
  title: 'Rich Text',
  name: 'wysiwyg',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          title: 'Image',
          fields: [
            {
              title: 'Alt Text',
              name: 'alt',
              type: 'string',
            },
          ],
        },
        {
          type: 'embed',
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Rich Text',
        media: DocumentTextIcon,
      }
    },
  },
}
