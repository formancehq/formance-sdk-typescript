# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetWalletResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `activityGetWalletOutput`                                                               | [shared.ActivityGetWalletOutput](../../../sdk/models/shared/activitygetwalletoutput.md) | :heavy_minus_sign:                                                                      | Wallet                                                                                  |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |