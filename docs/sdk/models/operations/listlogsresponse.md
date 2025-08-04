# ListLogsResponse

## Example Usage

```typescript
import { ListLogsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListLogsResponse = {
  contentType: "<value>",
  statusCode: 124336,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `logsCursorResponse`                                                          | [shared.LogsCursorResponse](../../../sdk/models/shared/logscursorresponse.md) | :heavy_minus_sign:                                                            | OK                                                                            |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |