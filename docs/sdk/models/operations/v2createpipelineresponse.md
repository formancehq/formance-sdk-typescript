# V2CreatePipelineResponse

## Example Usage

```typescript
import { V2CreatePipelineResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreatePipelineResponse = {
  contentType: "<value>",
  statusCode: 34820,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.V2CreatePipelineResponseBody](../../../sdk/models/operations/v2createpipelineresponsebody.md) | :heavy_minus_sign:                                                                                        | Created ipeline                                                                                           |