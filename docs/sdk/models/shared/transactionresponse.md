# TransactionResponse

## Example Usage

```typescript
import { TransactionResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TransactionResponse = {
  data: {
    postCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    postings: [
      {
        amount: BigInt("100"),
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    preCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      "orders:2": {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
    reference: "ref:001",
    timestamp: new Date("2025-09-11T07:18:01.119Z"),
    txid: BigInt("321473"),
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.Transaction](../../../sdk/models/shared/transaction.md) | :heavy_check_mark:                                              | N/A                                                             |