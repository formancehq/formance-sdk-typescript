# CreateTransactionResponse

## Example Usage

```typescript
import { CreateTransactionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateTransactionResponse = {
  contentType: "<value>",
  statusCode: 870013,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transactionsResponse: {
    data: [
      {
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
        timestamp: new Date("2024-12-08T13:34:36.747Z"),
        txid: BigInt("799159"),
      },
    ],
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `transactionsResponse`                                                            | [shared.TransactionsResponse](../../../sdk/models/shared/transactionsresponse.md) | :heavy_minus_sign:                                                                | OK                                                                                |