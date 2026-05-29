# V2GetPipelineStateResponse

## Example Usage

```typescript
import { V2GetPipelineStateResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetPipelineStateResponse = {
  contentType: "<value>",
  statusCode: 150498,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `v2GetPipelineStateResponse`                                                                  | [ledger.V2GetPipelineStateResponse](../../../sdk/models/ledger/v2getpipelinestateresponse.md) | :heavy_minus_sign:                                                                            | Pipeline information                                                                          |