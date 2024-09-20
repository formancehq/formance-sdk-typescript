# RunWorkflowResponse

## Example Usage

```typescript
import { RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: RunWorkflowResponse = {
  contentType: "<value>",
  statusCode: 317983,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `runWorkflowResponse`                                                           | [shared.RunWorkflowResponse](../../../sdk/models/shared/runworkflowresponse.md) | :heavy_minus_sign:                                                              | The workflow instance                                                           |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |