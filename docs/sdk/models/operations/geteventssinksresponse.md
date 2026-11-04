# GetEventsSinksResponse

## Example Usage

```typescript
import { GetEventsSinksResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetEventsSinksResponse = {
  contentType: "<value>",
  statusCode: 998016,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `errorResponse`                                                                                       | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)                               | :heavy_minus_sign:                                                                                    | Bad request                                                                                           |
| `forbidden`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Insufficient permissions (missing required scope)                                                     |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `unauthorized`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Authentication required (missing or invalid JWT token)                                                |
| `object`                                                                                              | [operations.GetEventsSinksResponseBody](../../../sdk/models/operations/geteventssinksresponsebody.md) | :heavy_minus_sign:                                                                                    | Event sinks retrieved successfully.                                                                   |