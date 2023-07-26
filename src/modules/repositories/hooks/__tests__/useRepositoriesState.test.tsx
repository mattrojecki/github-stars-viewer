import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PAGE_SIZE,
  DEFAULT_QUERY,
} from '../../constants'
import { useReactRepositorieState } from '../useRepositoriesState'

const mockBase64ValueForFirstPage = 'Y3Vyc29yOjA=' // getValueForCursorInBase64(DEFAULT_AFTER_VALUE)
const mockBase64ValueForSecondPage = 'Y3Vyc29yOjEw'
const mockQuery = 'topic:testing'
const mockPagination = {
  pageSize: 10,
  total: 100,
  current: 2,
}

describe('useRepositoriesState', () => {
  it('returns proper initial state and changes it depending on used action', () => {
    const { result } = renderHook(() => useReactRepositorieState())

    // assert initial state
    expect(result.current.query).toBe(DEFAULT_QUERY)
    expect(result.current.pageSize).toBe(DEFAULT_PAGE_SIZE)
    expect(result.current.currentPage).toBe(DEFAULT_CURRENT_PAGE)
    expect(result.current.after).toBe(mockBase64ValueForFirstPage)
    expect(result.current.before).toBe(undefined)

    // update query
    act(() => {
      result.current.updateStateQuery(mockQuery)
    })

    expect(result.current.query).toBe(mockQuery)
    expect(result.current.pageSize).toBe(DEFAULT_PAGE_SIZE)
    expect(result.current.currentPage).toBe(DEFAULT_CURRENT_PAGE)
    expect(result.current.after).toBe(mockBase64ValueForFirstPage)
    expect(result.current.before).toBe(undefined)

    // update pagination
    act(() => {
      result.current.updateStateAfterPageChange(mockPagination)
    })

    expect(result.current.query).toBe(mockQuery)
    expect(result.current.pageSize).toBe(DEFAULT_PAGE_SIZE)
    expect(result.current.currentPage).toBe(DEFAULT_CURRENT_PAGE + 1)
    expect(result.current.after).toBe(mockBase64ValueForSecondPage)
    expect(result.current.before).toBe('10')
  })
})
