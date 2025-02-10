# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetHoldResponse = {
  contentType: "<value>",
  getHoldResponse: {
    data: {
      description:
        "bathrobe submissive meh nor mmm elevator utter heavily deed",
      id: "a907b0e8-03f9-4147-8067-39c39afcd72f",
      metadata: {
        "key": "<value>",
      },
      originalAmount: BigInt("100"),
      remaining: BigInt("10"),
      walletID: "<id>",
    },
  },
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `getHoldResponse`                                                       | [shared.GetHoldResponse](../../../sdk/models/shared/getholdresponse.md) | :heavy_minus_sign:                                                      | Holds                                                                   |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |