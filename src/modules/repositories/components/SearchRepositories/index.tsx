import { ChangeEvent, FC, useCallback, useMemo } from 'react'
import { Input } from 'antd'
import { SearchProps } from 'antd/es/input'
import debounce from 'lodash/debounce'
import { DEFAULT_QUERY, DEFAULT_DEBOUNCE_INTERVAL } from '../../constants'

interface SearchRepositoriesProps extends SearchProps {
  onSearch: (value: string) => void
}

export const SearchRepositories: FC<SearchRepositoriesProps> = ({
  onSearch,
}) => {
  const debouncedSearch = useMemo(
    () => debounce(nextValue => onSearch(nextValue), DEFAULT_DEBOUNCE_INTERVAL),
    [onSearch],
  )

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.persist()
      const { value } = event.target
      debouncedSearch(value)
    },
    [debouncedSearch],
  )

  return (
    <Input
      placeholder={`Type search query like: ${DEFAULT_QUERY}`}
      onChange={handleSearch}
      allowClear
    />
  )
}
