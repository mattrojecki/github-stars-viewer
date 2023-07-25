import Head from 'next/head'
import { useGetRepositoriesQuery } from '@/generated/graphql'
import {
  normalizeRepositoryData,
  SearchRepositories,
  TableWithRepositories,
  useReactRepositorieState,
} from '@/modules/repositories'
import { Alert } from 'antd'

export default function MainPage() {
  const {
    before,
    after,
    pageSize,
    currentPage,
    query,
    updateStateAfterPageChange,
    updateStateQuery,
  } = useReactRepositorieState()
  const { data, loading, error } = useGetRepositoriesQuery({
    variables: {
      before,
      after,
      pageSize,
      query,
    },
  })
  const items = normalizeRepositoryData(data)

  return (
    <>
      <Head>
        <title>Github Stars Viewer</title>
        <meta
          name="description"
          content="Simple viewer for repositories with most stars!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error ? (
        <Alert message={error.name} description={error.message} type="error" />
      ) : (
        <>
          <SearchRepositories onSearch={updateStateQuery} />
          <TableWithRepositories
            dataSource={items}
            loading={loading}
            pagination={{
              pageSize,
              total: data?.search.repositoryCount,
              current: currentPage,
            }}
            onChange={updateStateAfterPageChange}
          />
        </>
      )}
    </>
  )
}
