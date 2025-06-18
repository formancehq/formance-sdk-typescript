# GetBalancesResponse

## Example Usage

```typescript
import { GetBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetBalancesResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `balancesCursorResponse`                                                              | [shared.BalancesCursorResponse](../../../sdk/models/shared/balancescursorresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |