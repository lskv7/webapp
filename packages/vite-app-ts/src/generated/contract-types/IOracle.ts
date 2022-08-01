/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface IOracleInterface extends utils.Interface {
  contractName: 'IOracle';
  functions: {
    'estimateAmountOut(address,uint128,address,uint32)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'estimateAmountOut',
    values: [string, BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'estimateAmountOut', data: BytesLike): Result;

  events: {};
}

export interface IOracle extends BaseContract {
  contractName: 'IOracle';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    estimateAmountOut(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;
  };

  estimateAmountOut(
    tokenIn: string,
    amountIn: BigNumberish,
    tokenOut: string,
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    estimateAmountOut(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    estimateAmountOut(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateAmountOut(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
