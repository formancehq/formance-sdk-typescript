# V2ListExportersResponse

## Example Usage

```typescript
import { V2ListExportersResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListExportersResponse = {
  contentType: "<value>",
  statusCode: 22756,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `object`                                                                                                | [operations.V2ListExportersResponseBody](../../../sdk/models/operations/v2listexportersresponsebody.md) | :heavy_minus_sign:                                                                                      | Exporters list                                                                                          |