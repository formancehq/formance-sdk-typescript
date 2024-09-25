# V2GetWorkflowResponse

## Example Usage

```typescript
import { V2GetWorkflowResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetWorkflowResponse = {
  contentType: "<value>",
  statusCode: 226,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `v2GetWorkflowResponse`                                                             | [shared.V2GetWorkflowResponse](../../../sdk/models/shared/v2getworkflowresponse.md) | :heavy_minus_sign:                                                                  | The workflow                                                                        |