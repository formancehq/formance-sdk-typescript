# GetServerInfoOrchestrationResponse

## Example Usage

```typescript
import { GetServerInfoOrchestrationResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetServerInfoOrchestrationResponse = {
  contentType: "<value>",
  statusCode: 486226,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `serverInfo`                                                                | [orchestration.ServerInfo](../../../sdk/models/orchestration/serverinfo.md) | :heavy_minus_sign:                                                          | Server information                                                          |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |