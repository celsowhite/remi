import {defineField} from 'sanity'

const sectionIdField = defineField({
  title: 'Section ID (Optional)',
  name: 'sectionId',
  type: 'string',
  description:
    'Enter a unique ID for this section. The ID can be used to deep link within the site.',
  validation: (Rule) =>
    Rule.custom((id) => {
      if (typeof id === 'undefined') return true
      const regex = /(^[a-z0-9-]+$)/ // Regex pattern goes here
      if (regex.test(id)) {
        return true
      } else {
        return 'Invalid slug: Only numbers, lowercase letters, and dashes are permitted.' // Error message goes here
      }
    }),
})

export default sectionIdField
