/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IAdminInterface extends ethers.utils.Interface {
  functions: {
    "isAdmin(address)": FunctionFragment;
    "isSuperAdmin(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isSuperAdmin",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSuperAdmin",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAdmin extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IAdminInterface;

  functions: {
    isAdmin(_addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    isSuperAdmin(_addr: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  isAdmin(_addr: string, overrides?: CallOverrides): Promise<boolean>;

  isSuperAdmin(_addr: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    isAdmin(_addr: string, overrides?: CallOverrides): Promise<boolean>;

    isSuperAdmin(_addr: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    isAdmin(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isSuperAdmin(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isAdmin(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSuperAdmin(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}