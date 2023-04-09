/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILendingLiquidate,
  ILendingLiquidateInterface,
} from "../ILendingLiquidate";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "sender",
        type: "address",
      },
    ],
    name: "liquidateBorrow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class ILendingLiquidate__factory {
  static readonly abi = _abi;
  static createInterface(): ILendingLiquidateInterface {
    return new utils.Interface(_abi) as ILendingLiquidateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILendingLiquidate {
    return new Contract(address, _abi, signerOrProvider) as ILendingLiquidate;
  }
}
