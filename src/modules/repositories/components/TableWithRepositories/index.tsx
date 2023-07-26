import { Table, Typography } from 'antd'
import { ColumnsType, TableProps } from 'antd/es/table'
import { FC } from 'react'
import { CustomRepositoryItem } from '../../types'
import { TableWrapper } from './styled'

const { Link, Text } = Typography

export const columns: ColumnsType<CustomRepositoryItem> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name, { url }) => {
      return (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      )
    },
    width: '40%',
  },
  {
    title: 'Stars',
    dataIndex: 'stargazerCount',
    render: stargazerCount => (
      <>
        🌟 <Text code>{stargazerCount}</Text>
      </>
    ),
    width: '30%',
  },
  {
    title: 'Forks',
    dataIndex: 'forkCount',
    render: forkCount => (
      <>
        🍴 <Text code>{forkCount}</Text>
      </>
    ),
    width: '30%',
  },
]

export const TableWithRepositories: FC<TableProps<CustomRepositoryItem>> = ({
  ...rest
}) => (
  <TableWrapper>
    <Table
      rowKey={'id'}
      columns={columns}
      className={'repositories-table'}
      data-testid="repositories-table"
      {...rest}
    />
  </TableWrapper>
)
