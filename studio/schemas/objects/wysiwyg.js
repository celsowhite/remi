import {MdOutlineTextSnippet} from 'react-icons/md'

export default {
  title: 'Content',
  name: 'wysiwyg',
  type: 'object',
  icon: MdOutlineTextSnippet,
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
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: 'Content',
      }
    },
  },
}
