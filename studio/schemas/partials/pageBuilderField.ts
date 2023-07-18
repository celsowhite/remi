import {ImageIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

const pageBuilderField = defineField({
  title: 'Page Builder',
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({type: 'richText'}),
    defineArrayMember({type: 'embedSection'}),
    defineArrayMember({type: 'imageTextPanel'}),
    defineArrayMember({type: 'cardGrid'}),
    defineArrayMember({
      title: 'Image',
      name: 'image',
      type: 'image',
      icon: ImageIcon,
      fields: [
        {title: 'Alt', name: 'alt', type: 'string'},
        {title: 'Caption', name: 'caption', type: 'string'},
      ],
    }),
    defineArrayMember({type: 'accordions'}),
    defineArrayMember({type: 'textBanner'}),
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'sectionHeader'}),
    defineArrayMember({type: 'postList'}),
  ],
})

export default pageBuilderField
