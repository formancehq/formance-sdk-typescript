# GetInstanceStageHistoryResponse

## Example Usage

```typescript
import { GetInstanceStageHistoryResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetInstanceStageHistoryResponse = {
  contentType: "<value>",
  getWorkflowInstanceHistoryStageResponse: {
    data: [],
  },
  statusCode: 437032,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `getWorkflowInstanceHistoryStageResponse`                                                                               | [shared.GetWorkflowInstanceHistoryStageResponse](../../../sdk/models/shared/getworkflowinstancehistorystageresponse.md) | :heavy_minus_sign:                                                                                                      | The workflow instance stage history                                                                                     |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |