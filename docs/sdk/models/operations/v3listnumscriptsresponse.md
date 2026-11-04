# V3ListNumscriptsResponse

## Example Usage

```typescript
import { V3ListNumscriptsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListNumscriptsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 215136,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `errorResponse`                                                                           | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)                   | :heavy_minus_sign:                                                                        | Bad request                                                                               |
| `forbidden`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | Insufficient permissions (missing required scope)                                         |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `listNumscriptsResponse`                                                                  | [ledgerV3.ListNumscriptsResponse](../../../sdk/models/ledgerV3/listnumscriptsresponse.md) | :heavy_minus_sign:                                                                        | List of numscripts retrieved successfully                                                 |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `unauthorized`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | Authentication required (missing or invalid JWT token)                                    |