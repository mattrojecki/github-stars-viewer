import styled from '@emotion/styled'

export const LogoContainer = styled.h1`
  font-size: 1.5em;
  color: #fff;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 128px);
  padding: 32px;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`
// 128 px is combined height of header and footer

export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
`
