# GetServerInfoReconciliationResponse

## Example Usage

```typescript
import { GetServerInfoReconciliationResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetServerInfoReconciliationResponse = {
  contentType: "<value>",
  statusCode: 463140,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `serverInfo`                                                                  | [reconciliation.ServerInfo](../../../sdk/models/reconciliation/serverinfo.md) | :heavy_minus_sign:                                                            | Server information                                                            |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |