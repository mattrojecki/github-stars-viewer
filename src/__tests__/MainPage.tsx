import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import MainPage from '../pages/index'
import {
  mockGetRepositoriesSuccessfulRequest1stPage,
  mockGetRepositoriesSuccessfulRequest2ndPage,
  mockNormalizedRepositoryData,
} from '@/modules/repositories'
import React from 'react'

const withProvider = (ui: JSX.Element) => (
  <MockedProvider
    mocks={[
      mockGetRepositoriesSuccessfulRequest1stPage,
      mockGetRepositoriesSuccessfulRequest2ndPage,
    ]}
  >
    {ui}
  </MockedProvider>
)

describe('MainPage', () => {
  it('renders MainPage with correct number of items', async () => {
    const { container } = render(withProvider(<MainPage />))

    expect(screen.getByText('No data')).toBeInTheDocument()

    await waitFor(async () => {
      expect(
        screen.getByText(mockNormalizedRepositoryData[0].name),
      ).toBeInTheDocument()

      const rows = container.querySelectorAll('tbody tr')
      expect(rows.length).toEqual(10)
    })
  })
  it('renders MainPage with correct data', async () => {
    render(withProvider(<MainPage />))

    await waitFor(async () => {
      expect(
        screen.getByText(mockNormalizedRepositoryData[0].name),
      ).toBeInTheDocument()

      for (const item of mockNormalizedRepositoryData) {
        const titleWithLink = screen.getByText(item.name)
        const stars = (titleWithLink.parentElement as HTMLTableCellElement)
          .nextSibling
        const forks = stars?.nextSibling

        expect(titleWithLink).toHaveAttribute('href', item.url)
        expect(stars).toHaveTextContent(`🌟 ${item.stargazerCount}`)
        expect(forks).toHaveTextContent(`🍴 ${item.forkCount}`)
      }
    })
  })
  it('renders MainPage and calls click next page', async () => {
    const { container } = render(withProvider(<MainPage />))

    await waitFor(async () => {
      expect(
        screen.getByText(mockNormalizedRepositoryData[0].name),
      ).toBeInTheDocument()
    })

    const secondPageButton = container.querySelectorAll('li')[2]
    fireEvent.click(secondPageButton)

    await waitFor(async () => {
      expect(
        screen.getByText(
          mockGetRepositoriesSuccessfulRequest2ndPage.result.data.search
            .edges[0].node.name,
        ),
      ).toBeInTheDocument()
    })
  })
})
