# ListWorkflowsResponse

## Example Usage

```typescript
import { ListWorkflowsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListWorkflowsResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `listWorkflowsResponse`                                                             | [shared.ListWorkflowsResponse](../../../sdk/models/shared/listworkflowsresponse.md) | :heavy_minus_sign:                                                                  | List of workflows                                                                   |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |