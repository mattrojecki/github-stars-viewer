import { getValueForCursorInBase64 } from '..'

describe('getValueForCursorInBase64', () => {
  it('returns proper value', () => {
    expect(getValueForCursorInBase64('0')).toStrictEqual('Y3Vyc29yOjA=')
    expect(getValueForCursorInBase64('5')).toStrictEqual('Y3Vyc29yOjU=')
    expect(getValueForCursorInBase64('100')).toStrictEqual('Y3Vyc29yOjEwMA==')
  })
})
