# V2RevertTransactionResponse

## Example Usage

```typescript
import { V2RevertTransactionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2RevertTransactionResponse = {
  contentType: "<value>",
  statusCode: 118727,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2RevertTransactionResponse: {
    data: {
      id: BigInt("317983"),
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
      timestamp: new Date("2023-03-31T00:46:25.708Z"),
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
| `v2RevertTransactionResponse`                                                                   | [shared.V2RevertTransactionResponse](../../../sdk/models/shared/v2reverttransactionresponse.md) | :heavy_minus_sign:                                                                              | OK                                                                                              |