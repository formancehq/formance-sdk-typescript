# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetHoldResponse = {
  contentType: "<value>",
  getHoldResponse: {
    data: {
      description: "Public-key homogeneous conglomeration",
      id: "cf3be453-f870-4b32-ab5a-73429cdb1a84",
      metadata: {
        "key": "<value>",
      },
      originalAmount: BigInt("100"),
      remaining: BigInt("10"),
      walletID: "<value>",
    },
  },
  statusCode: 132068,
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