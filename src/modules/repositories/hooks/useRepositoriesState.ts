import { TableProps } from 'antd'
import { useCallback, useState } from 'react'
import {
  CustomRepositoryItem,
  UseRepositoryState,
  UseRepositoryStateKey,
  UseRepositoryStateType,
} from '../types'

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_CURRENT_PAGE = 1
const DEFAULT_AFTER_VALUE = '0'

const getAfterValueInBase64 = (afterValue: string) =>
  Buffer.from(`cursor:${afterValue}`).toString('base64')

const initialState: UseRepositoryState = {
  pageSize: DEFAULT_PAGE_SIZE,
  currentPage: DEFAULT_CURRENT_PAGE,
  after: getAfterValueInBase64(DEFAULT_AFTER_VALUE),
}

export const useReactRepositorieState = () => {
  const [state, setState] = useState<UseRepositoryState>(initialState)

  const updateStateByKey = useCallback(
    (key: UseRepositoryStateKey, value: UseRepositoryStateType) =>
      setState(oldState => ({ ...oldState, [key]: value })),
    [setState],
  )

  const updateStateAfterPageChange = useCallback(
    (
      params: Parameters<
        NonNullable<TableProps<CustomRepositoryItem>['onChange']>
      >[0],
    ) => {
      const { pageSize, current } = params
      const afterValue =
        current && pageSize
          ? String((current - 1) * pageSize)
          : DEFAULT_AFTER_VALUE

      setState(oldState => ({
        ...oldState,
        after: getAfterValueInBase64(afterValue),
        before: String(pageSize),
        pageSize: pageSize || DEFAULT_PAGE_SIZE,
        currentPage: current,
      }))
    },
    [setState],
  )

  return {
    ...state,
    updateStateByKey,
    updateStateAfterPageChange,
  }
}
