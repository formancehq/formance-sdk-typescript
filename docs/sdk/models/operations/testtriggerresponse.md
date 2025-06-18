# TestTriggerResponse

## Example Usage

```typescript
import { TestTriggerResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: TestTriggerResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `v2TestTriggerResponse`                                                             | [shared.V2TestTriggerResponse](../../../sdk/models/shared/v2testtriggerresponse.md) | :heavy_minus_sign:                                                                  | Test a trigger                                                                      |