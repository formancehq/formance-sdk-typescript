# GetTransactionsResponse

## Example Usage

```typescript
import { GetTransactionsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetTransactionsResponse = {
  cursor: {
    data: [
      {
        id: 617238,
        metadata: {
          "key": "<value>",
        },
        postCommitVolumes: {
          "key": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
            "EUR": {
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
          "key": {
            "USD": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
            "EUR": {
              balance: BigInt("90"),
              input: BigInt("100"),
              output: BigInt("10"),
            },
          },
        },
        reference: "ref:001",
        timestamp: new Date("2024-09-29T04:20:53.946Z"),
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                            | [shared.GetTransactionsResponseCursor](../../../sdk/models/shared/gettransactionsresponsecursor.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |