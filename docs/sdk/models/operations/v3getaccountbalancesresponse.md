# V3GetAccountBalancesResponse

## Example Usage

```typescript
import { V3GetAccountBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetAccountBalancesResponse = {
  contentType: "<value>",
  statusCode: 642026,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `v3BalancesCursorResponse`                                                                | [shared.V3BalancesCursorResponse](../../../sdk/models/shared/v3balancescursorresponse.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |