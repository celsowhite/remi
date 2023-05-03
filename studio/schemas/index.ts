import {SchemaTypeDefinition} from 'sanity'

// Documents
const documentModules: Record<string, {default: SchemaTypeDefinition}> = import.meta.glob(
  './documents/*.{js,jsx,ts,tsx}',
  {
    eager: true,
  }
)
const documentSchemas = Object.values(documentModules).map((module) => module.default)

// Objects
const objectModules: Record<string, {default: SchemaTypeDefinition}> = import.meta.glob(
  './objects/*.{js,jsx,ts,tsx}',
  {eager: true}
)
const objectSchemas = Object.values(objectModules).map((module) => module.default)

// Export Schemas
export const schemaTypes = [...documentSchemas, ...objectSchemas]
