# V2GetTransactionResponse

## Example Usage

```typescript
import { V2GetTransactionResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetTransactionResponse = {
  data: {
    id: BigInt("20950"),
    metadata: {
      "admin": "true",
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
    timestamp: new Date("2023-03-28T03:08:04.092Z"),
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [shared.V2ExpandedTransaction](../../../sdk/models/shared/v2expandedtransaction.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |