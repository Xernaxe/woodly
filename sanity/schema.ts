import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project-schema'
import FAQ from './schemas/FAQ-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, FAQ],
}
