# V2ListSchemasResponse

## Example Usage

```typescript
import { V2ListSchemasResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListSchemasResponse = {
  contentType: "<value>",
  statusCode: 341567,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `v2SchemasCursorResponse`                                                               | [shared.V2SchemasCursorResponse](../../../sdk/models/shared/v2schemascursorresponse.md) | :heavy_minus_sign:                                                                      | Schemas retrieved successfully                                                          |