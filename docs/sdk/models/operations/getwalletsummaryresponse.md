# GetWalletSummaryResponse

## Example Usage

```typescript
import { GetWalletSummaryResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetWalletSummaryResponse = {
  contentType: "<value>",
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `getWalletSummaryResponse`                                                                | [shared.GetWalletSummaryResponse](../../../sdk/models/shared/getwalletsummaryresponse.md) | :heavy_minus_sign:                                                                        | Wallet summary                                                                            |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |