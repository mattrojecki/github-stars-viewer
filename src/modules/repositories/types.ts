import { Repository, Starrable } from '@/generated/graphql'

export type CustomRepositoryItem = Pick<
  Repository & Starrable,
  'name' | 'forkCount' | 'url' | 'id' | 'stargazerCount' | '__typename'
>
