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

interface TestNextTransferRouterInterface extends ethers.utils.Interface {
  functions: {
    "KKUB()": FunctionFragment;
    "PROJECT()": FunctionFragment;
    "addAddress(string,address)": FunctionFragment;
    "addKToken(address)": FunctionFragment;
    "addToken(string,address)": FunctionFragment;
    "adminKAP20Router()": FunctionFragment;
    "adminProjectRouter()": FunctionFragment;
    "allowedAddrByIndex(string,uint256)": FunctionFragment;
    "allowedAddrByPage(string,uint256,uint256)": FunctionFragment;
    "allowedAddrLength(string)": FunctionFragment;
    "allowedTokenByIndex(string,uint256)": FunctionFragment;
    "allowedTokenByPage(string,uint256,uint256)": FunctionFragment;
    "allowedTokenLength(string)": FunctionFragment;
    "committee()": FunctionFragment;
    "isAllowedAddr(string,address)": FunctionFragment;
    "isAllowedToken(string,address)": FunctionFragment;
    "isKToken(address)": FunctionFragment;
    "kTokenByIndex(uint256)": FunctionFragment;
    "kTokenByPage(uint256,uint256)": FunctionFragment;
    "kTokenLength()": FunctionFragment;
    "removeAddress(string,address)": FunctionFragment;
    "removeKToken(address)": FunctionFragment;
    "removeToken(string,address)": FunctionFragment;
    "setAdminKAP20Router(address)": FunctionFragment;
    "setAdminProjectRouter(address)": FunctionFragment;
    "setCommittee(address)": FunctionFragment;
    "setKKUB(address)": FunctionFragment;
    "transferFrom(string,address,address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "KKUB", values?: undefined): string;
  encodeFunctionData(functionFragment: "PROJECT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "addKToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "adminKAP20Router",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adminProjectRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedAddrByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedAddrByPage",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedAddrLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokenByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokenByPage",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokenLength",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "committee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isAllowedAddr",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowedToken",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "isKToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "kTokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "kTokenByPage",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "kTokenLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeKToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdminKAP20Router",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdminProjectRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCommittee",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKKUB", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "KKUB", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PROJECT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addKToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminKAP20Router",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedAddrByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedAddrByPage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedAddrLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokenByPage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokenLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "committee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isKToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "kTokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kTokenByPage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kTokenLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeKToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdminKAP20Router",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdminProjectRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCommittee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKKUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "AdminKAP20RouterSet(address,address,address)": EventFragment;
    "AdminProjectRouterSet(address,address,address)": EventFragment;
    "CommitteeSet(address,address,address)": EventFragment;
    "KKUBSet(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminKAP20RouterSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminProjectRouterSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CommitteeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "KKUBSet"): EventFragment;
}

export type AdminKAP20RouterSetEvent = TypedEvent<
  [string, string, string] & {
    _caller: string;
    _oldAddress: string;
    _newAddress: string;
  }
>;

export type AdminProjectRouterSetEvent = TypedEvent<
  [string, string, string] & {
    _caller: string;
    _oldAddress: string;
    _newAddress: string;
  }
>;

export type CommitteeSetEvent = TypedEvent<
  [string, string, string] & {
    oldCommittee: string;
    newCommittee: string;
    caller: string;
  }
>;

export type KKUBSetEvent = TypedEvent<
  [string, string, string] & {
    _caller: string;
    _oldAddress: string;
    _newAddress: string;
  }
>;

export class TestNextTransferRouter extends BaseContract {
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

  interface: TestNextTransferRouterInterface;

  functions: {
    KKUB(overrides?: CallOverrides): Promise<[string]>;

    PROJECT(overrides?: CallOverrides): Promise<[string]>;

    addAddress(
      _project: string,
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addKToken(
      _kToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addToken(
      _project: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminKAP20Router(overrides?: CallOverrides): Promise<[string]>;

    adminProjectRouter(overrides?: CallOverrides): Promise<[string]>;

    allowedAddrByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedAddrByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    allowedAddrLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    allowedTokenByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedTokenByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    allowedTokenLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    committee(overrides?: CallOverrides): Promise<[string]>;

    isAllowedAddr(
      _project: string,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isAllowedToken(
      _project: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isKToken(_kToken: string, overrides?: CallOverrides): Promise<[boolean]>;

    kTokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    kTokenByPage(
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    kTokenLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeAddress(
      _project: string,
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeKToken(
      _kToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeToken(
      _project: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdminKAP20Router(
      _adminKAP20Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKKUB(
      _KKUB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      _project: string,
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  KKUB(overrides?: CallOverrides): Promise<string>;

  PROJECT(overrides?: CallOverrides): Promise<string>;

  addAddress(
    _project: string,
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addKToken(
    _kToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addToken(
    _project: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminKAP20Router(overrides?: CallOverrides): Promise<string>;

  adminProjectRouter(overrides?: CallOverrides): Promise<string>;

  allowedAddrByIndex(
    _project: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allowedAddrByPage(
    _project: string,
    _page: BigNumberish,
    _limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  allowedAddrLength(
    _project: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allowedTokenByIndex(
    _project: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allowedTokenByPage(
    _project: string,
    _page: BigNumberish,
    _limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  allowedTokenLength(
    _project: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  committee(overrides?: CallOverrides): Promise<string>;

  isAllowedAddr(
    _project: string,
    _addr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAllowedToken(
    _project: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isKToken(_kToken: string, overrides?: CallOverrides): Promise<boolean>;

  kTokenByIndex(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  kTokenByPage(
    _page: BigNumberish,
    _limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  kTokenLength(overrides?: CallOverrides): Promise<BigNumber>;

  removeAddress(
    _project: string,
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeKToken(
    _kToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeToken(
    _project: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdminKAP20Router(
    _adminKAP20Router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdminProjectRouter(
    _adminProjectRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCommittee(
    _committee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKKUB(
    _KKUB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    _project: string,
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    KKUB(overrides?: CallOverrides): Promise<string>;

    PROJECT(overrides?: CallOverrides): Promise<string>;

    addAddress(
      _project: string,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addKToken(_kToken: string, overrides?: CallOverrides): Promise<void>;

    addToken(
      _project: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    adminKAP20Router(overrides?: CallOverrides): Promise<string>;

    adminProjectRouter(overrides?: CallOverrides): Promise<string>;

    allowedAddrByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedAddrByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    allowedAddrLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedTokenByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedTokenByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    allowedTokenLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    committee(overrides?: CallOverrides): Promise<string>;

    isAllowedAddr(
      _project: string,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAllowedToken(
      _project: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isKToken(_kToken: string, overrides?: CallOverrides): Promise<boolean>;

    kTokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    kTokenByPage(
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    kTokenLength(overrides?: CallOverrides): Promise<BigNumber>;

    removeAddress(
      _project: string,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeKToken(_kToken: string, overrides?: CallOverrides): Promise<void>;

    removeToken(
      _project: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAdminKAP20Router(
      _adminKAP20Router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCommittee(_committee: string, overrides?: CallOverrides): Promise<void>;

    setKKUB(_KKUB: string, overrides?: CallOverrides): Promise<void>;

    transferFrom(
      _project: string,
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminKAP20RouterSet(address,address,address)"(
      _caller?: string | null,
      _oldAddress?: string | null,
      _newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _caller: string; _oldAddress: string; _newAddress: string }
    >;

    AdminKAP20RouterSet(
      _caller?: string | null,
      _oldAddress?: string | null,
      _newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _caller: string; _oldAddress: string; _newAddress: string }
    >;

    "AdminProjectRouterSet(address,address,address)"(
      _caller?: string | null,
      _oldAddress?: string | null,
      _newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _caller: string; _oldAddress: string; _newAddress: string }
    >;

    AdminProjectRouterSet(
      _caller?: string | null,
      _oldAddress?: string | null,
      _newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _caller: string; _oldAddress: string; _newAddress: string }
    >;

    "CommitteeSet(address,address,address)"(
      oldCommittee?: string | null,
      newCommittee?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { oldCommittee: string; newCommittee: string; caller: string }
    >;

    CommitteeSet(
      oldCommittee?: string | null,
      newCommittee?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { oldCommittee: string; newCommittee: string; caller: string }
    >;

    "KKUBSet(address,address,address)"(
      _caller?: string | null,
      _oldAddress?: string | null,
      _newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _caller: string; _oldAddress: string; _newAddress: string }
    >;

    KKUBSet(
      _caller?: string | null,
      _oldAddress?: string | null,
      _newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _caller: string; _oldAddress: string; _newAddress: string }
    >;
  };

  estimateGas: {
    KKUB(overrides?: CallOverrides): Promise<BigNumber>;

    PROJECT(overrides?: CallOverrides): Promise<BigNumber>;

    addAddress(
      _project: string,
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addKToken(
      _kToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addToken(
      _project: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminKAP20Router(overrides?: CallOverrides): Promise<BigNumber>;

    adminProjectRouter(overrides?: CallOverrides): Promise<BigNumber>;

    allowedAddrByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedAddrByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedAddrLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedTokenByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedTokenByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedTokenLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    committee(overrides?: CallOverrides): Promise<BigNumber>;

    isAllowedAddr(
      _project: string,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAllowedToken(
      _project: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isKToken(_kToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    kTokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kTokenByPage(
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kTokenLength(overrides?: CallOverrides): Promise<BigNumber>;

    removeAddress(
      _project: string,
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeKToken(
      _kToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeToken(
      _project: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdminKAP20Router(
      _adminKAP20Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKKUB(
      _KKUB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      _project: string,
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    KKUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROJECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAddress(
      _project: string,
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addKToken(
      _kToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addToken(
      _project: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminKAP20Router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminProjectRouter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedAddrByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedAddrByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedAddrLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokenByIndex(
      _project: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokenByPage(
      _project: string,
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokenLength(
      _project: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    committee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAllowedAddr(
      _project: string,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAllowedToken(
      _project: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isKToken(
      _kToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kTokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kTokenByPage(
      _page: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kTokenLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAddress(
      _project: string,
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeKToken(
      _kToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeToken(
      _project: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdminKAP20Router(
      _adminKAP20Router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdminProjectRouter(
      _adminProjectRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKKUB(
      _KKUB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      _project: string,
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
