import {
  mockGetRepositoriesSuccessfulResponse,
  mockNormalizedRepositoryData,
} from '@/modules/repositories'
import { render, screen, fireEvent } from '@testing-library/react'
import { TablePaginationConfig } from 'antd'
import { TableWithRepositories } from '..'

const mockPagination: TablePaginationConfig = {
  pageSize: 10,
  total: mockGetRepositoriesSuccessfulResponse.search.repositoryCount,
  current: 1,
}

const mockValue = {
  ...mockPagination,
  current: 2,
}

describe('TableWithRepositories', () => {
  it('renders component without data available', () => {
    render(<TableWithRepositories />)

    const test = screen.getByText('No data')

    expect(test).toBeInTheDocument()
  })

  test.each(['Name', 'Stars', 'Forks'])(
    'renders column with name - %s',
    title => {
      render(<TableWithRepositories />)

      expect(screen.getByText(title)).toBeInTheDocument()
    },
  )

  it('renders table with data', () => {
    render(<TableWithRepositories dataSource={mockNormalizedRepositoryData} />)

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

  it('call function with proper value when using pagination', () => {
    const mockFn = jest.fn()
    const { container } = render(
      <TableWithRepositories
        dataSource={mockNormalizedRepositoryData}
        pagination={mockPagination}
        onChange={mockFn}
      />,
    )

    const secondPageButton = container.querySelectorAll('li')[2]
    fireEvent.click(secondPageButton)

    expect(mockFn).toBeCalledWith(
      mockValue,
      expect.anything(),
      expect.anything(),
      expect.anything(),
    )
  })
})
