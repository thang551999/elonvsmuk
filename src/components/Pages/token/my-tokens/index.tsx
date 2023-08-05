import React from 'react';
import Link from 'next/link';

import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Token',
    dataIndex: 'token',
    width: 300,
  },
  {
    title: 'Total Supply',
    dataIndex: 'total-supply',
    width: 150,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const MyTokenPage = () => {
  return (
    <div className='my-tokens-wrapper'>
      <div className='wrapper-top'>
        <h1>My Tokens</h1>

        <Link href='/token/create-token'>
          <Button type='primary'>Create Token</Button>
        </Link>
      </div>

      <div className='my-tokens__table'>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
      </div>
    </div>
  );
};

export default MyTokenPage;
