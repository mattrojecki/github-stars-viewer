import { ThemeConfig } from 'antd'

const colorBlue = '#00A7E1'

export const theme: ThemeConfig = {
  token: {
    fontFamily: 'var(--lato-font)',
  },
  components: {
    Layout: {
      colorBgHeader: colorBlue,
    },
    Typography: {
      colorLink: colorBlue,
    },
  },
}
