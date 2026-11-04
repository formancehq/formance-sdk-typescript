# ReplaceConnectionResponse

## Example Usage

```typescript
import { ReplaceConnectionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReplaceConnectionResponse = {
  contentType: "<value>",
  statusCode: 195547,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `connection`                                                              | [connectivity.Connection](../../../sdk/models/connectivity/connection.md) | :heavy_minus_sign:                                                        | Updated                                                                   |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `error`                                                                   | [connectivity.ErrorT](../../../sdk/models/connectivity/errort.md)         | :heavy_minus_sign:                                                        | Request or server error. The HTTP status and code identify the failure.   |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |