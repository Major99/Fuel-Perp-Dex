/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.0
  Forc version: 0.66.5
  Fuel-Core version: 0.40.0
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [],
  "functions": [
    {
      "inputs": [],
      "name": "get_count",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amount",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "increment_counter",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write",
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [
  {
    "key": "6e3c7b4f69bbff7132c3c3a62883a6868f47b0bc2a7f21605f29038cd9a5e05f",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class TestContractInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    get_count: FunctionFragment;
    increment_counter: FunctionFragment;
  };
}

export class TestContract extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: TestContractInterface;
  declare functions: {
    get_count: InvokeFunction<[], BN>;
    increment_counter: InvokeFunction<[amount: BigNumberish], BN>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
