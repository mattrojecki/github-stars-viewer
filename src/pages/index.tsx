import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useGetReactRepositoriesQuery } from '@/generated/graphql'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const apolloData = useGetReactRepositoriesQuery()

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
      <main className={`${inter.className}`}></main>
    </>
  )
}
