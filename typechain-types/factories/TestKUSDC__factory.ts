/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestKUSDC, TestKUSDCInterface } from "../TestKUSDC";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_kyc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_adminProjectRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_committee",
        type: "address",
      },
      {
        internalType: "address",
        name: "_transferRouter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_acceptedKYCLevel",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AdminProjectRouterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCommittee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCommittee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CommitteeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldTransferRouter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newTransferRouter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TransferRouterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "PROJECT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptedKYCLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activateOnlyKYCAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "adminApprove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adminProjectRouter",
    outputs: [
      {
        internalType: "contract IAdminProjectRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "adminTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "committee",
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
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "externalTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "internalTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActivatedOnlyKYCAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kyc",
    outputs: [
      {
        internalType: "contract IKYCBitkubChain",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_kycLevel",
        type: "uint256",
      },
    ],
    name: "setAcceptedKYCLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adminProjectRouter",
        type: "address",
      },
    ],
    name: "setAdminProjectRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_committee",
        type: "address",
      },
    ],
    name: "setCommittee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kyc",
        type: "address",
      },
    ],
    name: "setKYC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_transferRouter",
        type: "address",
      },
    ],
    name: "setTransferRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferRouter",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001fb038038062001fb0833981016040819052620000349162000215565b60408051808201825260058082526412d554d11560da1b6020808401828152855180870187528481528083018490528651808801909752938652908501919091526000805460ff191690558251929391926012918a918a918a918a918a91620000a09160099162000152565b508751620000b690600a9060208b019062000152565b508651620000cc9060019060208a019062000152565b50600b805460ff191660ff9790971696909617909555600280546001600160a01b03199081166001600160a01b039687161790915560008054610100600160a81b03199081166101009688168702179091556004805490911693861690940292909217909255600580549091169190921617905560035550620002b99650505050505050565b82805462000160906200027c565b90600052602060002090601f016020900481019282620001845760008555620001cf565b82601f106200019f57805160ff1916838001178555620001cf565b82800160010185558215620001cf579182015b82811115620001cf578251825591602001919060010190620001b2565b50620001dd929150620001e1565b5090565b5b80821115620001dd5760008155600101620001e2565b80516001600160a01b03811681146200021057600080fd5b919050565b600080600080600060a086880312156200022e57600080fd5b6200023986620001f8565b94506200024960208701620001f8565b93506200025960408701620001f8565b92506200026960608701620001f8565b9150608086015190509295509295909350565b600181811c908216806200029157607f821691505b60208210811415620002b357634e487b7160e01b600052602260045260246000fd5b50919050565b611ce780620002c96000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80638ad1a37f1161011a578063cef3810f116100ad578063d89f92d41161007c578063d89f92d41461042c578063da72c1e81461043f578063dd62ed3e14610452578063f71c559c1461048b578063fcd6c1911461049e57600080fd5b8063cef3810f146103e0578063d648e0c8146103e9578063d738a1ef146103fc578063d864e7401461041457600080fd5b8063a457c2d7116100e9578063a457c2d714610394578063a9059cbb146103a7578063bddae40e146103ba578063c7095909146103cd57600080fd5b80638ad1a37f1461034157806390d6b45f1461034e57806395d89b41146103795780639dc29fac1461038157600080fd5b80633f4ba83a1161019257806359e026f71161016157806359e026f7146102f05780635c975abb1461030357806370a08231146103105780638456cb591461033957600080fd5b80633f4ba83a146102af57806340c10f19146102b7578063480a6229146102ca578063483a83df146102dd57600080fd5b806323b872dd116101ce57806323b872dd146102605780632abd043814610273578063313ce5671461027d578063395093511461029c57600080fd5b806306fdde0314610200578063095ea7b31461021e5780631714d7f31461024157806318160ddd14610249575b600080fd5b6102086104b1565b60405161021591906118c6565b60405180910390f35b61023161022c366004611937565b61053f565b6040519015158152602001610215565b610208610555565b61025260085481565b604051908152602001610215565b61023161026e366004611961565b610562565b61027b610637565b005b600b5461028a9060ff1681565b60405160ff9091168152602001610215565b6102316102aa366004611937565b61067a565b61027b6106b6565b61027b6102c5366004611937565b6106ed565b61027b6102d836600461199d565b61071e565b61027b6102eb36600461199d565b610831565b6102316102fe366004611961565b610881565b6000546102319060ff1681565b61025261031e36600461199d565b6001600160a01b031660009081526006602052604090205490565b61027b610a9e565b6004546102319060ff1681565b600254610361906001600160a01b031681565b6040516001600160a01b039091168152602001610215565b610208610ad5565b61027b61038f366004611937565b610ae2565b6102316103a2366004611937565b610b0f565b6102316103b5366004611937565b610b9e565b61027b6103c836600461199d565b610bcd565b61027b6103db36600461199d565b610c66565b61025260035481565b600554610361906001600160a01b031681565b6000546103619061010090046001600160a01b031681565b6004546103619061010090046001600160a01b031681565b61027b61043a3660046119bf565b610cf4565b61023161044d366004611961565b610d2c565b6102526104603660046119d8565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205490565b610231610499366004611961565b610f5a565b6102316104ac366004611961565b61105c565b600980546104be90611a0b565b80601f01602080910402602001604051908101604052809291908181526020018280546104ea90611a0b565b80156105375780601f1061050c57610100808354040283529160200191610537565b820191906000526020600020905b81548152906001019060200180831161051a57829003601f168201915b505050505081565b600061054c338484611339565b50600192915050565b600180546104be90611a0b565b6000805460ff161561058f5760405162461bcd60e51b815260040161058690611a46565b60405180910390fd5b61059a84848461145e565b6001600160a01b03841660009081526007602090815260408083203384529091529020548281101561061f5760405162461bcd60e51b815260206004820152602860248201527f4b415032303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401610586565b61062c8533858403611339565b506001949350505050565b60045461010090046001600160a01b031633146106665760405162461bcd60e51b815260040161058690611a70565b6106786004805460ff19166001179055565b565b3360008181526007602090815260408083206001600160a01b0387168452909152812054909161054c9185906106b1908690611aca565b611339565b60045461010090046001600160a01b031633146106e55760405162461bcd60e51b815260040161058690611a70565b6106786115dc565b60005460ff16156107105760405162461bcd60e51b815260040161058690611a46565b61071a8282611665565b5050565b60045461010090046001600160a01b0316331461074d5760405162461bcd60e51b815260040161058690611a70565b6001600160a01b0381166107c95760405162461bcd60e51b815260206004820152603b60248201527f417574686f72697a6174696f6e3a206e65772061646d696e2070726f6a65637460448201527f20726f7574657220697320746865207a65726f206164647265737300000000006064820152608401610586565b6000805460405133926001600160a01b0385811693610100900416917f58e55f165b909274f0282e1ac942856a6d21936c654774fbdc15a6f8966a17ce9190a4600080546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60045461010090046001600160a01b031633146108605760405162461bcd60e51b815260040161058690611a70565b600280546001600160a01b0319166001600160a01b03831617905550565b50565b6000805460ff16156108a55760405162461bcd60e51b815260040161058690611a46565b6000546040516302b98ccf60e41b81526101009091046001600160a01b031690632b98ccf0906108dc903390600190600401611ae2565b602060405180830381865afa1580156108f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091d9190611b9b565b8061093257506005546001600160a01b031633145b61094e5760405162461bcd60e51b815260040161058690611bbd565b6003546002546040516306f19a8d60e21b81526001600160a01b03878116600483015290911690631bc66a3490602401602060405180830381865afa15801561099b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bf9190611c1b565b10158015610a3d57506003546002546040516306f19a8d60e21b81526001600160a01b03868116600483015290911690631bc66a34906024015b602060405180830381865afa158015610a16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3a9190611c1b565b10155b610a895760405162461bcd60e51b815260206004820152601c60248201527f4b415032303a206f6e6c7920696e7465726e616c20707572706f7365000000006044820152606401610586565b610a9484848461145e565b5060019392505050565b60045461010090046001600160a01b03163314610acd5760405162461bcd60e51b815260040161058690611a70565b610678611732565b600a80546104be90611a0b565b60005460ff1615610b055760405162461bcd60e51b815260040161058690611a46565b61071a8282611792565b3360009081526007602090815260408083206001600160a01b038616845290915281205482811015610b915760405162461bcd60e51b815260206004820152602560248201527f4b415032303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610586565b610a943385858403611339565b6000805460ff1615610bc25760405162461bcd60e51b815260040161058690611a46565b61054c33848461145e565b60045461010090046001600160a01b03163314610bfc5760405162461bcd60e51b815260040161058690611a70565b60045460405133916001600160a01b038481169261010090920416907f98be4d11812ae954fb899148019b8b73771468cd9346e1ca47d2fa731011eae690600090a4600480546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60045461010090046001600160a01b03163314610c955760405162461bcd60e51b815260040161058690611a70565b60055460405133916001600160a01b03848116929116907fb82f5713184c2542a2134cb1d30de213eb0a56612721e1d610eb0299c3771df590600090a4600580546001600160a01b0319166001600160a01b0392909216919091179055565b60045461010090046001600160a01b03163314610d235760405162461bcd60e51b815260040161058690611a70565b61087e81600355565b60045460009061010090046001600160a01b03163314610d5e5760405162461bcd60e51b815260040161058690611a70565b60045460ff1615610e9d576002546040516306f19a8d60e21b81526001600160a01b0386811660048301526000921690631bc66a3490602401602060405180830381865afa158015610db4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd89190611c1b565b118015610e5157506002546040516306f19a8d60e21b81526001600160a01b0385811660048301526000921690631bc66a3490602401602060405180830381865afa158015610e2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4f9190611c1b565b115b610e9d5760405162461bcd60e51b815260206004820152601d60248201527f4b41503732313a206f6e6c7920696e7465726e616c20707572706f73650000006044820152606401610586565b6001600160a01b03841660009081526006602052604090205482811015610ed65760405162461bcd60e51b815260040161058690611c34565b6001600160a01b03808616600090815260066020526040808220868503905591861681529081208054859290610f0d908490611aca565b92505081905550836001600160a01b0316856001600160a01b0316600080516020611c9283398151915285604051610f4791815260200190565b60405180910390a3506001949350505050565b6000805460ff1615610f7e5760405162461bcd60e51b815260040161058690611a46565b6000546040516302b98ccf60e41b81526101009091046001600160a01b031690632b98ccf090610fb5903390600190600401611ae2565b602060405180830381865afa158015610fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff69190611b9b565b8061100b57506005546001600160a01b031633145b6110275760405162461bcd60e51b815260040161058690611bbd565b6003546002546040516306f19a8d60e21b81526001600160a01b03878116600483015290911690631bc66a34906024016109f9565b6000805460ff16156110805760405162461bcd60e51b815260040161058690611a46565b6000546040516302b98ccf60e41b81526101009091046001600160a01b031690632b98ccf0906110b7903390600190600401611ae2565b602060405180830381865afa1580156110d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f89190611b9b565b806111765750600054604051631bea69e360e01b81526101009091046001600160a01b031690631bea69e390611135903390600190600401611ae2565b602060405180830381865afa158015611152573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111769190611b9b565b6111de5760405162461bcd60e51b815260206004820152603360248201527f417574686f72697a6174696f6e3a2072657374726963746564206f6e6c7920736044820152723ab832b91030b236b4b71037b91030b236b4b760691b6064820152608401610586565b6003546002546040516306f19a8d60e21b81526001600160a01b03878116600483015290911690631bc66a3490602401602060405180830381865afa15801561122b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124f9190611c1b565b101580156112cc57506003546002546040516306f19a8d60e21b81526001600160a01b03868116600483015290911690631bc66a3490602401602060405180830381865afa1580156112a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c99190611c1b565b10155b6113325760405162461bcd60e51b815260206004820152603160248201527f4b415032303a206f776e6572206f72207370656e64657220616464726573732060448201527034b9903737ba10309025aca1903ab9b2b960791b6064820152608401610586565b610a948484845b6001600160a01b03831661139b5760405162461bcd60e51b8152602060048201526024808201527f4b415032303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610586565b6001600160a01b0382166113fc5760405162461bcd60e51b815260206004820152602260248201527f4b415032303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610586565b6001600160a01b0383811660008181526007602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166114c25760405162461bcd60e51b815260206004820152602560248201527f4b415032303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610586565b6001600160a01b0382166115245760405162461bcd60e51b815260206004820152602360248201527f4b415032303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610586565b6001600160a01b0383166000908152600660205260409020548181101561155d5760405162461bcd60e51b815260040161058690611c34565b6001600160a01b03808516600090815260066020526040808220858503905591851681529081208054849290611594908490611aca565b92505081905550826001600160a01b0316846001600160a01b0316600080516020611c92833981519152846040516115ce91815260200190565b60405180910390a350505050565b60005460ff166116255760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610586565b6000805460ff191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b6001600160a01b0382166116bb5760405162461bcd60e51b815260206004820152601f60248201527f4b415032303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610586565b80600860008282546116cd9190611aca565b90915550506001600160a01b038216600090815260066020526040812080548392906116fa908490611aca565b90915550506040518181526001600160a01b03831690600090600080516020611c928339815191529060200160405180910390a35050565b60005460ff16156117555760405162461bcd60e51b815260040161058690611a46565b6000805460ff191660011790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589060200161165b565b6001600160a01b0382166117f25760405162461bcd60e51b815260206004820152602160248201527f4b415032303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610586565b6001600160a01b038216600090815260066020526040902054818110156118665760405162461bcd60e51b815260206004820152602260248201527f4b415032303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610586565b6001600160a01b0383166000908152600660205260408120838303905560088054849290611895908490611c7a565b90915550506040518281526000906001600160a01b03851690600080516020611c9283398151915290602001611451565b600060208083528351808285015260005b818110156118f3578581018301518582016040015282016118d7565b81811115611905576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461193257600080fd5b919050565b6000806040838503121561194a57600080fd5b6119538361191b565b946020939093013593505050565b60008060006060848603121561197657600080fd5b61197f8461191b565b925061198d6020850161191b565b9150604084013590509250925092565b6000602082840312156119af57600080fd5b6119b88261191b565b9392505050565b6000602082840312156119d157600080fd5b5035919050565b600080604083850312156119eb57600080fd5b6119f48361191b565b9150611a026020840161191b565b90509250929050565b600181811c90821680611a1f57607f821691505b60208210811415611a4057634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526024908201527f436f6d6d69747465653a2072657374726963746564206f6e6c7920636f6d6d696040820152637474656560e01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b60008219821115611add57611add611ab4565b500190565b60018060a01b0383168152600060206040818401526000845481600182811c915080831680611b1257607f831692505b858310811415611b3057634e487b7160e01b85526022600452602485fd5b6040880183905260608801818015611b4f5760018114611b6057611b8b565b60ff19861682528782019650611b8b565b60008b81526020902060005b86811015611b8557815484820152908501908901611b6c565b83019750505b50949a9950505050505050505050565b600060208284031215611bad57600080fd5b815180151581146119b857600080fd5b602080825260409082018190527f416363657373436f6e74726f6c6c65723a2072657374726963746564206f6e6c908201527f792073757065722061646d696e206f72207472616e7366657220726f75746572606082015260800190565b600060208284031215611c2d57600080fd5b5051919050565b60208082526026908201527f4b415032303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b600082821015611c8c57611c8c611ab4565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212200137e173782b08dfa8270370d196b12bd51c6a34cf581a73b9732c26e635ce7d64736f6c634300080b0033";

export class TestKUSDC__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _kyc: string,
    _adminProjectRouter: string,
    _committee: string,
    _transferRouter: string,
    _acceptedKYCLevel: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestKUSDC> {
    return super.deploy(
      _kyc,
      _adminProjectRouter,
      _committee,
      _transferRouter,
      _acceptedKYCLevel,
      overrides || {}
    ) as Promise<TestKUSDC>;
  }
  getDeployTransaction(
    _kyc: string,
    _adminProjectRouter: string,
    _committee: string,
    _transferRouter: string,
    _acceptedKYCLevel: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _kyc,
      _adminProjectRouter,
      _committee,
      _transferRouter,
      _acceptedKYCLevel,
      overrides || {}
    );
  }
  attach(address: string): TestKUSDC {
    return super.attach(address) as TestKUSDC;
  }
  connect(signer: Signer): TestKUSDC__factory {
    return super.connect(signer) as TestKUSDC__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestKUSDCInterface {
    return new utils.Interface(_abi) as TestKUSDCInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestKUSDC {
    return new Contract(address, _abi, signerOrProvider) as TestKUSDC;
  }
}