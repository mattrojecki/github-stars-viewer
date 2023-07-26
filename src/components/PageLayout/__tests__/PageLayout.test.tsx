import { render } from '@testing-library/react'
import { PageLayout } from '..'

describe('PageLayout', () => {
  it('renders component unchanged without children', () => {
    const { container } = render(<PageLayout />)
    expect(container).toMatchSnapshot()
  })

  it('renders component unchanged with children', () => {
    const { container } = render(
      <PageLayout>
        <div>Test</div>
      </PageLayout>,
    )
    expect(container).toMatchSnapshot()
  })
})
