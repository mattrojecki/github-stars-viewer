import { GetRepositoriesDocument } from '@/generated/graphql'

export const mockGetRepositoriesSuccessfulRequest2ndPage = {
  request: {
    query: GetRepositoriesDocument,
    variables: {
      after: 'Y3Vyc29yOjEw',
      before: '10',
      pageSize: 10,
      query: 'is:public stars:>10000 topic:react',
    },
  },
  result: {
    data: {
      search: {
        repositoryCount: 171,
        pageInfo: {
          startCursor: 'Y3Vyc29yOjEx',
          endCursor: 'Y3Vyc29yOjIw',
          __typename: 'PageInfo',
        },
        edges: [
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnkxNDczNTA0NjM=',
              name: '33-js-concepts',
              url: 'https://github.com/leonardomso/33-js-concepts',
              stargazerCount: 56890,
              forkCount: 8006,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnkzNjA0MDg5NA==',
              name: 'gatsby',
              url: 'https://github.com/gatsbyjs/gatsby',
              stargazerCount: 54622,
              forkCount: 10553,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnkzOTQ2NDAxOA==',
              name: 'superset',
              url: 'https://github.com/apache/superset',
              stargazerCount: 53065,
              forkCount: 10999,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnkxMjI1NjM3Ng==',
              name: 'ionic-framework',
              url: 'https://github.com/ionic-team/ionic-framework',
              stargazerCount: 49173,
              forkCount: 13647,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnk5NDkxMTE0NQ==',
              name: 'docusaurus',
              url: 'https://github.com/facebook/docusaurus',
              stargazerCount: 46408,
              forkCount: 7156,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnkzMjE0NDA2',
              name: 'meteor',
              url: 'https://github.com/meteor/meteor',
              stargazerCount: 43563,
              forkCount: 5269,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnkzNTc3Mjg5Njk=',
              name: 'bun',
              url: 'https://github.com/oven-sh/bun',
              stargazerCount: 42732,
              forkCount: 1171,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM=',
              name: 'react',
              url: 'https://github.com/typescript-cheatsheets/react',
              stargazerCount: 41706,
              forkCount: 3827,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnk2MjM2NzU1OA==',
              name: 'hyper',
              url: 'https://github.com/vercel/hyper',
              stargazerCount: 41255,
              forkCount: 3476,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'MDEwOlJlcG9zaXRvcnk2NTc5NDI5Mg==',
              name: 'styled-components',
              url: 'https://github.com/styled-components/styled-components',
              stargazerCount: 39294,
              forkCount: 2472,
              __typename: 'Repository',
            },
            __typename: 'SearchResultItemEdge',
          },
        ],
        __typename: 'SearchResultItemConnection',
      },
    },
  },
}
