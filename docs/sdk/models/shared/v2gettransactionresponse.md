# V2GetTransactionResponse

## Example Usage

```typescript
import { V2GetTransactionResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetTransactionResponse = {
  data: {
    id: BigInt("259600"),
    metadata: {
      "admin": "true",
    },
    postCommitEffectiveVolumes: {
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
    preCommitEffectiveVolumes: {
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
    reverted: false,
    timestamp: new Date("2023-03-07T20:17:26.783Z"),
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.V2Transaction](../../../sdk/models/shared/v2transaction.md) | :heavy_check_mark:                                                  | N/A                                                                 |