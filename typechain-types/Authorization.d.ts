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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AuthorizationInterface extends ethers.utils.Interface {
  functions: {
    "PROJECT()": FunctionFragment;
    "adminProjectRouter()": FunctionFragment;
    "setAdminProjectRouter(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "PROJECT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adminProjectRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdminProjectRouter",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "PROJECT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdminProjectRouter",
    data: BytesLike
  ): Result;

  events: {
    "AdminProjectRouterSet(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminProjectRouterSet"): EventFragment;
}

export type AdminProjectRouterSetEvent = TypedEvent<
  [string, string, string] & {
    oldAdmin: string;
    newAdmin: string;
    caller: string;
  }
>;

export class Authorization extends BaseContract {
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

  interface: AuthorizationInterface;

  functions: {
    PROJECT(overrides?: CallOverrides): Promise<[string]>;

    adminProjectRouter(overrides?: CallOverrides): Promise<[string]>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  PROJECT(overrides?: CallOverrides): Promise<string>;

  adminProjectRouter(overrides?: CallOverrides): Promise<string>;

  setAdminProjectRouter(
    _adminProjectRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PROJECT(overrides?: CallOverrides): Promise<string>;

    adminProjectRouter(overrides?: CallOverrides): Promise<string>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminProjectRouterSet(address,address,address)"(
      oldAdmin?: string | null,
      newAdmin?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { oldAdmin: string; newAdmin: string; caller: string }
    >;

    AdminProjectRouterSet(
      oldAdmin?: string | null,
      newAdmin?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { oldAdmin: string; newAdmin: string; caller: string }
    >;
  };

  estimateGas: {
    PROJECT(overrides?: CallOverrides): Promise<BigNumber>;

    adminProjectRouter(overrides?: CallOverrides): Promise<BigNumber>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PROJECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminProjectRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
