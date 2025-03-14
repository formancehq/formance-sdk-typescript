# V2TransactionsCursorResponse

## Example Usage

```typescript
import { V2TransactionsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2TransactionsCursorResponse = {
  cursor: {
    data: [
      {
        id: BigInt("131687"),
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
        timestamp: new Date("2024-03-11T03:02:50.967Z"),
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