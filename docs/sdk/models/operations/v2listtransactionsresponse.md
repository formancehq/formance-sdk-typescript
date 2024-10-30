# V2ListTransactionsResponse

## Example Usage

```typescript
import { V2ListTransactionsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListTransactionsResponse = {
  contentType: "<value>",
  statusCode: 501,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2TransactionsCursorResponse: {
    cursor: {
      data: [
        {
          id: BigInt("615560"),
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
          timestamp: new Date("2022-05-16T16:57:38.984Z"),
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `v2TransactionsCursorResponse`                                                                    | [shared.V2TransactionsCursorResponse](../../../sdk/models/shared/v2transactionscursorresponse.md) | :heavy_minus_sign:                                                                                | OK                                                                                                |