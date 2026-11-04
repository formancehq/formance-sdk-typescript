# ConnectivityInfoResponse

## Example Usage

```typescript
import { ConnectivityInfoResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ConnectivityInfoResponse = {
  contentType: "<value>",
  statusCode: 511805,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `error`                                                                 | [connectivity.ErrorT](../../../sdk/models/connectivity/errort.md)       | :heavy_minus_sign:                                                      | Request or server error. The HTTP status and code identify the failure. |
| `info`                                                                  | [connectivity.Info](../../../sdk/models/connectivity/info.md)           | :heavy_minus_sign:                                                      | Build information                                                       |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |