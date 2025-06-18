# V3ListPoolsResponse

## Example Usage

```typescript
import { V3ListPoolsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListPoolsResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `v3PoolsCursorResponse`                                                             | [shared.V3PoolsCursorResponse](../../../sdk/models/shared/v3poolscursorresponse.md) | :heavy_minus_sign:                                                                  | OK                                                                                  |