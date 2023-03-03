// Documents
const documentModules = import.meta.glob('./documents/*.{js,jsx}', {eager: true})
const documentSchemas = Object.values(documentModules).map((module) => module.default)

// Objects
const objectModules = import.meta.glob('./objects/*.{js,jsx}', {eager: true})
const objectSchemas = Object.values(objectModules).map((module) => module.default)

// Export Schemas
export const schemaTypes = [...documentSchemas, ...objectSchemas]
