import { FC, PropsWithChildren } from 'react'
import { Layout, Typography } from 'antd'
import { FooterTextContainer, LogoContainer, MainContainer } from './styled'

const { Header, Footer, Content } = Layout
const { Text } = Typography

export const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <Layout>
    <Header>
      <LogoContainer>⭐ Github Stars Viewer ⭐</LogoContainer>
    </Header>
    <Content>
      <MainContainer>{children}</MainContainer>
    </Content>
    <Footer>
      <FooterTextContainer>
        <Text>Mateusz Rojecki &copy; 2023</Text>
      </FooterTextContainer>
    </Footer>
  </Layout>
)
