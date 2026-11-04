# GetNumscriptResponse

## Example Usage

```typescript
import { GetNumscriptResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetNumscriptResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 821956,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `errorResponse`                                                                       | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)               | :heavy_minus_sign:                                                                    | Bad request                                                                           |
| `forbidden`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | Insufficient permissions (missing required scope)                                     |
| `getNumscriptResponse`                                                                | [ledgerV3.GetNumscriptResponse](../../../sdk/models/ledgerV3/getnumscriptresponse.md) | :heavy_minus_sign:                                                                    | Numscript retrieved successfully                                                      |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `unauthorized`                                                                        | *string*                                                                              | :heavy_minus_sign:                                                                    | Authentication required (missing or invalid JWT token)                                |