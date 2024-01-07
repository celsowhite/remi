import {ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import sectionIdField from '../partials/sectionIdField'

export default defineType({
  title: 'Slideshow',
  name: 'slideshow',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          type: 'slide',
        },
      ],
    }),
    defineField({
      title: 'Slides Per View',
      name: 'slidesPerView',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      title: 'Slide Spacing',
      name: 'slideSpacing',
      type: 'number',
      initialValue: 20,
    }),
    defineField({
      title: 'Show Arrow Nav',
      name: 'showArrowNav',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      title: 'Show Dot Nav',
      name: 'showDotNav',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      title: 'Loop',
      name: 'loop',
      type: 'boolean',
      initialValue: true,
    }),
    sectionIdField,
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Slideshow',
      }
    },
  },
})
