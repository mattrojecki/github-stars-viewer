import { GetRepositoriesQuery } from '@/generated/graphql'

export const mockGetRepositoriesSuccessfulResponse: GetRepositoriesQuery = {
  search: {
    repositoryCount: 171,
    pageInfo: {
      startCursor: 'Y3Vyc29yOjE=',
      endCursor: 'Y3Vyc29yOjEw',
      __typename: 'PageInfo',
    },
    edges: [
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==',
          name: 'freeCodeCamp',
          url: 'https://github.com/freeCodeCamp/freeCodeCamp',
          stargazerCount: 370296,
          forkCount: 32963,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
          name: 'react',
          url: 'https://github.com/facebook/react',
          stargazerCount: 210855,
          forkCount: 44186,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==',
          name: 'react-native',
          url: 'https://github.com/facebook/react-native',
          stargazerCount: 110899,
          forkCount: 23626,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==',
          name: 'next.js',
          url: 'https://github.com/vercel/next.js',
          stargazerCount: 109480,
          forkCount: 24437,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnkxNDA5ODA2OQ==',
          name: 'free-programming-books-zh_CN',
          url: 'https://github.com/justjavac/free-programming-books-zh_CN',
          stargazerCount: 103853,
          forkCount: 27695,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==',
          name: 'create-react-app',
          url: 'https://github.com/facebook/create-react-app',
          stargazerCount: 100401,
          forkCount: 26552,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnkyMzA4MzE1Ng==',
          name: 'material-ui',
          url: 'https://github.com/mui/material-ui',
          stargazerCount: 87850,
          forkCount: 29986,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnkzNDUyNjg4NA==',
          name: 'ant-design',
          url: 'https://github.com/ant-design/ant-design',
          stargazerCount: 86868,
          forkCount: 40710,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnk1NDE3MzU5Mw==',
          name: 'storybook',
          url: 'https://github.com/storybookjs/storybook',
          stargazerCount: 79523,
          forkCount: 8577,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: {
          id: 'MDEwOlJlcG9zaXRvcnkyMjY3MDg1Nw==',
          name: 'awesome-react',
          url: 'https://github.com/enaqx/awesome-react',
          stargazerCount: 57064,
          forkCount: 6809,
          __typename: 'Repository',
        },
        __typename: 'SearchResultItemEdge',
      },
    ],
    __typename: 'SearchResultItemConnection',
  },
}
