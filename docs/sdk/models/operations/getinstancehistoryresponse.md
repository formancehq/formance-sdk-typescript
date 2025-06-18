# GetInstanceHistoryResponse

## Example Usage

```typescript
import { GetInstanceHistoryResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetInstanceHistoryResponse = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `getWorkflowInstanceHistoryResponse`                                                                          | [shared.GetWorkflowInstanceHistoryResponse](../../../sdk/models/shared/getworkflowinstancehistoryresponse.md) | :heavy_minus_sign:                                                                                            | The workflow instance history                                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |