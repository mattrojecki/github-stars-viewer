import { GetRepositoriesQuery } from '@/generated/graphql'
import { CustomRepositoryItem } from '../types'

export const normalizeRepositoryData = (
  data: GetRepositoriesQuery | undefined,
) => {
  if (!data || !data?.search?.edges) {
    return []
  }

  const newData = data.search.edges
    .filter((elem, index) => {
      return elem?.node && elem?.node?.__typename === 'Repository'
    })
    .map(elem => elem!.node as CustomRepositoryItem)

  return newData
}
