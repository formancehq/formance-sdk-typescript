# V2TransactionsCursorResponseCursor

## Example Usage

```typescript
import { V2TransactionsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2TransactionsCursorResponseCursor = {
  data: [
    {
      id: BigInt("795535"),
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
      timestamp: new Date("2022-07-08T08:25:26.143Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [shared.V2ExpandedTransaction](../../../sdk/models/shared/v2expandedtransaction.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `hasMore`                                                                             | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   | false                                                                                 |
| `next`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `pageSize`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 15                                                                                    |
| `previous`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                          |