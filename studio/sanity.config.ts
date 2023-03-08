import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './deskStructure'
import {media} from 'sanity-plugin-media'

// Singleton Settings
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['general_settings', 'social_settings', 'blog_page'])

export default defineConfig({
  name: 'default',
  title: 'Otto',
  projectId: '1l7bk9fa',
  dataset: 'production',
  plugins: [deskTool({structure}), visionTool(), media()],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
