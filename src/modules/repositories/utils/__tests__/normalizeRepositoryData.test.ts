import { normalizeRepositoryData } from '..'
import {
  mockGetRepositoriesSuccessfulResponse,
  mockNormalizedRepositoryData,
} from '../../mocks'

describe('normalizeRepositoryData', () => {
  it('returns empty array when data is undefined', () => {
    expect(normalizeRepositoryData(undefined)).toStrictEqual([])
  })
  it('returns empty array when edges are missing', () => {
    const mockData = {
      search: {
        repositoryCount: 10,
        pageInfo: {},
      },
    }

    expect(normalizeRepositoryData(mockData)).toStrictEqual([])
  })
  it('returns empty array when edges are returned with wrong typename', () => {
    const mockData = JSON.parse(
      JSON.stringify(mockGetRepositoriesSuccessfulResponse).replaceAll(
        'Repository',
        'PullRequest',
      ),
    )

    expect(normalizeRepositoryData(mockData)).toStrictEqual([])
  })
  it('returns proper array with data when reponse is filled with proper data', () => {
    expect(
      normalizeRepositoryData(mockGetRepositoriesSuccessfulResponse),
    ).toStrictEqual(mockNormalizedRepositoryData)
  })
})
