# V2GetTransactionResponse

## Example Usage

```typescript
import { V2GetTransactionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetTransactionResponse = {
  contentType: "<value>",
  statusCode: 216550,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2GetTransactionResponse: {
    data: {
      id: BigInt("568434"),
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
      timestamp: new Date("2022-05-29T04:46:43.786Z"),
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `v2GetTransactionResponse`                                                                | [shared.V2GetTransactionResponse](../../../sdk/models/shared/v2gettransactionresponse.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |