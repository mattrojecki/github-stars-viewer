import type { CodegenConfig } from '@graphql-codegen/cli'

const codegenConfig: CodegenConfig = {
  schema: 'https://docs.github.com/public/schema.docs.graphql',
  documents: 'src/**/*.gql',
  overwrite: true,
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default codegenConfig
