# GetQueryCapabilitiesResponse

## Example Usage

```typescript
import { GetQueryCapabilitiesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetQueryCapabilitiesResponse = {
  contentType: "<value>",
  statusCode: 77248,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `error`                                                                                 | [connectivity.ErrorT](../../../sdk/models/connectivity/errort.md)                       | :heavy_minus_sign:                                                                      | Request or server error. The HTTP status and code identify the failure.                 |
| `queryCapabilities`                                                                     | [connectivity.QueryCapabilities](../../../sdk/models/connectivity/querycapabilities.md) | :heavy_minus_sign:                                                                      | OK                                                                                      |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |