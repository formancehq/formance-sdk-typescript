# GetInstanceResponse

## Example Usage

```typescript
import { GetInstanceResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetInstanceResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `getWorkflowInstanceResponse`                                                                   | [shared.GetWorkflowInstanceResponse](../../../sdk/models/shared/getworkflowinstanceresponse.md) | :heavy_minus_sign:                                                                              | The workflow instance                                                                           |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |