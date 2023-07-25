import { ApolloProvider } from '@apollo/client'
import { apolloClient, theme } from '@/config'
import { PageLayout } from '@/components'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import { Lato } from 'next/font/google'
import 'antd/dist/reset.css'

const lato = Lato({ subsets: ['latin-ext'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --lato-font: ${lato.style.fontFamily};
        }
      `}</style>
      <ApolloProvider client={apolloClient}>
        <ConfigProvider theme={theme}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ConfigProvider>
      </ApolloProvider>
    </>
  )
}
