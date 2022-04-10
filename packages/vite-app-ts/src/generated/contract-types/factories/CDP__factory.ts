/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CDP, CDPInterface } from "../CDP";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dbitTotalSupply",
        type: "uint256",
      },
    ],
    name: "BondExchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_bond",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61022761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80637e2cf8cd1461003a575b600080fd5b61004d610048366004610192565b61005f565b60405190815260200160405180910390f35b6000620186a082101561007b5750670de0b6b3a7640000919050565b600073__$171e2470cf6965da0fb3593a90051e207b$__6324d4e90a6100a7856509184e72a0006101ab565b6040518263ffffffff1660e01b81526004016100c591815260200190565b602060405180830381865af41580156100e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010691906101d8565b604051632e4c697f60e01b8152670e92596fd629000060048201526024810182905290915073__$171e2470cf6965da0fb3593a90051e207b$__90632e4c697f90604401602060405180830381865af4158015610167573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018b91906101d8565b9392505050565b6000602082840312156101a457600080fd5b5035919050565b60008160001904831182151516156101d357634e487b7160e01b600052601160045260246000fd5b500290565b6000602082840312156101ea57600080fd5b505191905056fea264697066735822122090792b705a376f20ff480343dce020709e5434bfa3d69732a61b8a632cc5696064736f6c634300080d0033";

type CDPConstructorParams =
  | [linkLibraryAddresses: CDPLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CDPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class CDP__factory extends ContractFactory {
  constructor(...args: CDPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, CDP__factory.linkBytecode(linkLibraryAddresses), signer);
    }
    this.contractName = "CDP";
  }

  static linkBytecode(linkLibraryAddresses: CDPLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$171e2470cf6965da0fb3593a90051e207b\\$__", "g"),
      linkLibraryAddresses[
        "contracts/Debond-v0/contracts/libraries/SafeMath.sol:SafeMath"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CDP> {
    return super.deploy(overrides || {}) as Promise<CDP>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CDP {
    return super.attach(address) as CDP;
  }
  connect(signer: Signer): CDP__factory {
    return super.connect(signer) as CDP__factory;
  }
  static readonly contractName: "CDP";
  public readonly contractName: "CDP";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CDPInterface {
    return new utils.Interface(_abi) as CDPInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CDP {
    return new Contract(address, _abi, signerOrProvider) as CDP;
  }
}

export interface CDPLibraryAddresses {
  ["contracts/Debond-v0/contracts/libraries/SafeMath.sol:SafeMath"]: string;
}
