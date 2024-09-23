# ReadTriggerResponse

## Example Usage

```typescript
import { ReadTriggerResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReadTriggerResponse = {
  contentType: "<value>",
  statusCode: 453543,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `readTriggerResponse`                                                           | [shared.ReadTriggerResponse](../../../sdk/models/shared/readtriggerresponse.md) | :heavy_minus_sign:                                                              | A specific trigger                                                              |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |