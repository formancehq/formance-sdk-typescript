# ListPreparedQueriesResponse

## Example Usage

```typescript
import { ListPreparedQueriesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListPreparedQueriesResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  statusCode: 842728,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `errorResponse`                                                                                     | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)                             | :heavy_minus_sign:                                                                                  | Bad request                                                                                         |
| `forbidden`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Insufficient permissions (missing required scope)                                                   |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `listPreparedQueriesResponse`                                                                       | [ledgerV3.ListPreparedQueriesResponse](../../../sdk/models/ledgerV3/listpreparedqueriesresponse.md) | :heavy_minus_sign:                                                                                  | List of prepared queries retrieved successfully                                                     |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `unauthorized`                                                                                      | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Authentication required (missing or invalid JWT token)                                              |