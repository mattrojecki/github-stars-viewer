import { TablePaginationConfig } from 'antd'
import { useCallback, useState } from 'react'
import {
  DEFAULT_AFTER_VALUE,
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PAGE_SIZE,
  DEFAULT_QUERY,
} from '../constants'
import { UseRepositoryState } from '../types'
import { getValueForCursorInBase64 } from '../utils'

const initialState: UseRepositoryState = {
  pageSize: DEFAULT_PAGE_SIZE,
  currentPage: DEFAULT_CURRENT_PAGE,
  after: getValueForCursorInBase64(DEFAULT_AFTER_VALUE),
  query: DEFAULT_QUERY,
}

export const useReactRepositorieState = () => {
  const [state, setState] = useState<UseRepositoryState>(initialState)

  const updateStateQuery = useCallback(
    (value: string) => {
      setState(oldState => ({ ...oldState, query: value || DEFAULT_QUERY }))
    },
    [setState],
  )

  const updateStateAfterPageChange = useCallback(
    (params: TablePaginationConfig) => {
      const { pageSize, current } = params
      const afterValue =
        current && pageSize
          ? String((current - 1) * pageSize)
          : DEFAULT_AFTER_VALUE

      setState(oldState => ({
        ...oldState,
        after: getValueForCursorInBase64(afterValue),
        before: String(pageSize),
        pageSize: pageSize || DEFAULT_PAGE_SIZE,
        currentPage: current || DEFAULT_CURRENT_PAGE,
      }))
    },
    [setState],
  )

  return {
    ...state,
    updateStateQuery,
    updateStateAfterPageChange,
  }
}
