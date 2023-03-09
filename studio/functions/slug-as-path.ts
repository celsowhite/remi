import {defineField} from 'sanity'
import slugify from 'slugify'

export default function slugAsPath(prefix: string = ``, source: string = `title`) {
  // Format the start of the slug.
  const slugStart = prefix ? `/${prefix}/` : `/`

  // New slug field.
  return defineField({
    name: `slug`,
    type: `slug`,
    options: {
      source,
      slugify: (value) => {
        const slug = slugify(value, {lower: true})
        return `${slugStart}${slug}`
      },
    },
    validation: (Rule) =>
      Rule.required().custom(({current}) => {
        if (typeof current === 'undefined') {
          return true
        }

        if (current) {
          if (!current.startsWith(slugStart)) {
            return `Slug must begin with "${slugStart}". Click "Generate" to reset.`
          }

          if (current.slice(slugStart.length).split('').includes('/')) {
            return `Slug cannot have another "/" after "${slugStart}"`
          }

          if (current === slugStart) {
            return `Slug cannot be empty`
          }

          if (current.endsWith('/')) {
            return `Slug cannot end with "/"`
          }
        }

        return true
      }),
  })
}
