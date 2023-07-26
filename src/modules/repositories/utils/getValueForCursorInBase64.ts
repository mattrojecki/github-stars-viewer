export const getValueForCursorInBase64 = (afterValue: string) =>
  Buffer.from(`cursor:${afterValue}`).toString('base64')
