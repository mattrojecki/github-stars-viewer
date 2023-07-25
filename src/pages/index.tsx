import Head from 'next/head'
import { useGetReactRepositoriesQuery } from '@/generated/graphql'
import {
  normalizeRepositoryData,
  TableWithRepositories,
} from '@/modules/repositories'
import { Alert } from 'antd'

export default function MainPage() {
  const { data, loading, error } = useGetReactRepositoriesQuery()

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
        <TableWithRepositories items={items} loading={loading} />
      )}
    </>
  )
}
