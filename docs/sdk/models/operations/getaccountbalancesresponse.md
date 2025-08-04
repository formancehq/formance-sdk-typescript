# GetAccountBalancesResponse

## Example Usage

```typescript
import { GetAccountBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetAccountBalancesResponse = {
  contentType: "<value>",
  statusCode: 236528,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `balancesCursor`                                                      | [shared.BalancesCursor](../../../sdk/models/shared/balancescursor.md) | :heavy_minus_sign:                                                    | OK                                                                    |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |