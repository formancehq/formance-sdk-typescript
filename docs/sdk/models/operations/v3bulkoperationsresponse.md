# V3BulkOperationsResponse

## Example Usage

```typescript
import { V3BulkOperationsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3BulkOperationsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  statusCode: 756895,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `bulkErrorResponse`                                                     | *ledgerV3.BulkErrorResponse*                                            | :heavy_minus_sign:                                                      | Bulk operations completed with errors, or invalid request               |
| `bulkResponse`                                                          | [ledgerV3.BulkResponse](../../../sdk/models/ledgerV3/bulkresponse.md)   | :heavy_minus_sign:                                                      | Bulk operations completed                                               |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `errorResponse`                                                         | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md) | :heavy_minus_sign:                                                      | Method not allowed                                                      |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `res`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | Authentication failure before processing or in an element               |