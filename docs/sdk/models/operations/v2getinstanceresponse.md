# V2GetInstanceResponse

## Example Usage

```typescript
import { V2GetInstanceResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetInstanceResponse = {
    contentType: "<value>",
    statusCode: 581850,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `v2GetWorkflowInstanceResponse`                                                                     | [shared.V2GetWorkflowInstanceResponse](../../../sdk/models/shared/v2getworkflowinstanceresponse.md) | :heavy_minus_sign:                                                                                  | The workflow instance                                                                               |