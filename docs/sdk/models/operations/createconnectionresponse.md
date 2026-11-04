# CreateConnectionResponse

## Example Usage

```typescript
import { CreateConnectionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateConnectionResponse = {
  contentType: "<value>",
  statusCode: 118888,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `connection`                                                              | [connectivity.Connection](../../../sdk/models/connectivity/connection.md) | :heavy_minus_sign:                                                        | Created                                                                   |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `error`                                                                   | [connectivity.ErrorT](../../../sdk/models/connectivity/errort.md)         | :heavy_minus_sign:                                                        | Request or server error. The HTTP status and code identify the failure.   |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |