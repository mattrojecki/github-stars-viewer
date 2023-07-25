import { Repository, Starrable } from '@/generated/graphql'

export type CustomRepositoryItem = Pick<
  Repository & Starrable,
  'name' | 'forkCount' | 'url' | 'id' | 'stargazerCount' | '__typename'
>

export type UseRepositoryState = {
  pageSize: number
  before?: string
  after: string
  currentPage: number
  query: string
}

export type UseRepositoryStateKey = keyof UseRepositoryState

export type UseRepositoryStateType = UseRepositoryState[UseRepositoryStateKey]
