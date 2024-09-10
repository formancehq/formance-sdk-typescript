# V2CreateTransactionResponse

## Example Usage

```typescript
import { V2CreateTransactionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreateTransactionResponse = {
  contentType: "<value>",
  statusCode: 461479,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2CreateTransactionResponse: {
    data: {
      id: BigInt("520478"),
      metadata: {
        "admin": "true",
      },
      postings: [
        {
          amount: BigInt("100"),
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      reverted: false,
      timestamp: new Date("2024-05-05T11:02:21.971Z"),
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `v2CreateTransactionResponse`                                                                   | [shared.V2CreateTransactionResponse](../../../sdk/models/shared/v2createtransactionresponse.md) | :heavy_minus_sign:                                                                              | OK                                                                                              |