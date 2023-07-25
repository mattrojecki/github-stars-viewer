import { GetReactRepositoriesQuery } from '@/generated/graphql'
import { CustomRepositoryItem } from '../types'

export const normalizeRepositoryData = (
  data: GetReactRepositoriesQuery | undefined,
) => {
  if (!data || !data?.search?.edges) {
    return []
  }

  return data.search.edges
    .filter(elem => elem?.node && elem?.node?.__typename === 'Repository')
    .map(elem => elem!.node as CustomRepositoryItem)
}
