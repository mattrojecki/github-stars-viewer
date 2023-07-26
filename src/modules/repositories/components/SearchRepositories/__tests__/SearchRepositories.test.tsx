import { render, screen, fireEvent } from '@testing-library/react'
import { SearchRepositories } from '..'

jest.useFakeTimers()

describe('SearchRepositories', () => {
  it('renders correct placeholder', () => {
    render(<SearchRepositories onSearch={jest.fn} />)

    const input = screen.getByTestId('search-repositories-input')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute(
      'placeholder',
      'Type search query like: is:public stars:>10000 topic:react',
    )
  })
  it('executes function with proper value', () => {
    const mockFn = jest.fn()
    const mockValue = 'mock value'
    render(<SearchRepositories onSearch={mockFn} />)

    const input = screen.getByTestId('search-repositories-input')
    fireEvent.change(input, { target: { value: mockValue } })

    expect(mockFn).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(1000)

    expect(mockFn).toHaveBeenCalledWith(mockValue)
  })
})
