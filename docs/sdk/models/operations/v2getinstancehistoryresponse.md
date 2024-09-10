# V2GetInstanceHistoryResponse

## Example Usage

```typescript
import { V2GetInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetInstanceHistoryResponse = {
  contentType: "<value>",
  statusCode: 253291,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `v2GetWorkflowInstanceHistoryResponse`                                                                            | [shared.V2GetWorkflowInstanceHistoryResponse](../../../sdk/models/shared/v2getworkflowinstancehistoryresponse.md) | :heavy_minus_sign:                                                                                                | The workflow instance history                                                                                     |