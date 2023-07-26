import { GetRepositoriesDocument } from '@/generated/graphql'
import { mockGetRepositoriesSuccessfulResponse } from './mockGetRepositoriesSuccessfulResponse'

export const mockGetRepositoriesSuccessfulRequest1stPage = {
  request: {
    query: GetRepositoriesDocument,
    variables: {
      after: 'Y3Vyc29yOjA=',
      pageSize: 10,
      query: 'is:public stars:>10000 topic:react',
    },
  },
  result: {
    data: mockGetRepositoriesSuccessfulResponse,
  },
}
