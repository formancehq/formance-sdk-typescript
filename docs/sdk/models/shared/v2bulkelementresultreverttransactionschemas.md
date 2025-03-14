# V2BulkElementResultRevertTransactionSchemas

## Example Usage

```typescript
import { V2BulkElementResultRevertTransactionSchemas } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementResultRevertTransactionSchemas = {
  data: {
    id: BigInt("739633"),
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
    timestamp: new Date("2025-11-14T17:31:24.420Z"),
  },
  logID: 277990,
  responseType: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.V2Transaction](../../../sdk/models/shared/v2transaction.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `logID`                                                             | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `responseType`                                                      | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |