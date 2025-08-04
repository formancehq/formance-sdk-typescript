# V2ListWorkflowsResponse

## Example Usage

```typescript
import { V2ListWorkflowsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListWorkflowsResponse = {
  contentType: "<value>",
  statusCode: 932416,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `v2ListWorkflowsResponse`                                                               | [shared.V2ListWorkflowsResponse](../../../sdk/models/shared/v2listworkflowsresponse.md) | :heavy_minus_sign:                                                                      | List of workflows                                                                       |