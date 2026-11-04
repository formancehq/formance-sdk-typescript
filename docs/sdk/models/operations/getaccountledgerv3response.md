# GetAccountLedgerV3Response

## Example Usage

```typescript
import { GetAccountLedgerV3Response } from "@formance/formance-sdk/sdk/models/operations";

let value: GetAccountLedgerV3Response = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  statusCode: 26104,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `errorResponse`                                                                   | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)           | :heavy_minus_sign:                                                                | Bad request                                                                       |
| `forbidden`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Insufficient permissions (missing required scope)                                 |
| `getAccountResponse`                                                              | [ledgerV3.GetAccountResponse](../../../sdk/models/ledgerV3/getaccountresponse.md) | :heavy_minus_sign:                                                                | Account retrieved successfully                                                    |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `unauthorized`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Authentication required (missing or invalid JWT token)                            |