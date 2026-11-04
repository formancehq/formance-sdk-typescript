# ListAccountTypesResponse

## Example Usage

```typescript
import { ListAccountTypesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListAccountTypesResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  statusCode: 90293,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `errorResponse`                                                                               | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)                       | :heavy_minus_sign:                                                                            | Bad request                                                                                   |
| `forbidden`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Insufficient permissions (missing required scope)                                             |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `listAccountTypesResponse`                                                                    | [ledgerV3.ListAccountTypesResponse](../../../sdk/models/ledgerV3/listaccounttypesresponse.md) | :heavy_minus_sign:                                                                            | Account types retrieved successfully                                                          |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `unauthorized`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Authentication required (missing or invalid JWT token)                                        |