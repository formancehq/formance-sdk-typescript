# V2RunWorkflowResponse

## Example Usage

```typescript
import { V2RunWorkflowResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2RunWorkflowResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `v2RunWorkflowResponse`                                                             | [shared.V2RunWorkflowResponse](../../../sdk/models/shared/v2runworkflowresponse.md) | :heavy_minus_sign:                                                                  | The workflow instance                                                               |