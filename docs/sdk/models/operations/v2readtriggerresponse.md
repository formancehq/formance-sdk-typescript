# V2ReadTriggerResponse

## Example Usage

```typescript
import { V2ReadTriggerResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ReadTriggerResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `v2ReadTriggerResponse`                                                             | [shared.V2ReadTriggerResponse](../../../sdk/models/shared/v2readtriggerresponse.md) | :heavy_minus_sign:                                                                  | A specific trigger                                                                  |