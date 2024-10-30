# V2TransactionsCursorResponse

## Example Usage

```typescript
import { V2TransactionsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2TransactionsCursorResponse = {
  cursor: {
    data: [
      {
        id: BigInt("709051"),
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
        timestamp: new Date("2023-11-06T08:13:52.054Z"),
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                      | [shared.V2TransactionsCursorResponseCursor](../../../sdk/models/shared/v2transactionscursorresponsecursor.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |