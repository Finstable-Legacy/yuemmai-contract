/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILKAP20Liquidate,
  ILKAP20LiquidateInterface,
} from "../ILKAP20Liquidate";

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
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ILKAP20Liquidate__factory {
  static readonly abi = _abi;
  static createInterface(): ILKAP20LiquidateInterface {
    return new utils.Interface(_abi) as ILKAP20LiquidateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILKAP20Liquidate {
    return new Contract(address, _abi, signerOrProvider) as ILKAP20Liquidate;
  }
}