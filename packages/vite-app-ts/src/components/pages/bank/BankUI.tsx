import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { Form, InputNumber, Select } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useEthersContext } from 'eth-hooks/context';
import { BigNumber } from 'ethers';
import React, { FC } from 'react';

import { useAppContracts } from '~~/config/contractContext';

export interface IExampleUIProps {
  mainnetProvider: StaticJsonRpcProvider | undefined;
  yourCurrentBalance: BigNumber | undefined;
  price: number;
}

export const BankUI: FC<IExampleUIProps> = (props) => {
  const ethersContext = useEthersContext();

  const bankContract = useAppContracts('Bank', ethersContext.chainId);
  const debondDataContract = useAppContracts('DebondData', ethersContext.chainId);

  /* const [numberOfClasses] = useContractReader(debondDataContract, debondDataContract?.numberOfClasses, []);*/

  const periods: string[] = [];
  const interests: string[] = [];
  const symbols: string[] = [];
  const tokens: string[] = [];

  return (
    <div>
      <Header>
        <Form
          name="basic"
          // layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item label="Token" name="token" rules={[{ required: true, message: 'Please choose a token!' }]}>
            <Select style={{ width: 120 }}>
              {symbols.map((symbol) => (
                <Select.Option key={symbol}>{symbol}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Period in months"
            name="period"
            rules={[{ required: true, message: 'Please choose a period!' }]}>
            <InputNumber size={'large'} min={1} max={24} />
          </Form.Item>
          <Form.Item
            label="Max amount"
            name="amount"
            rules={[{ required: true, message: 'Please choose a maximum amount!' }]}>
            <InputNumber
              defaultValue={1000}
              formatter={(value): string => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
          </Form.Item>
        </Form>
      </Header>

      <h2>test:</h2>
    </div>
  );
};
