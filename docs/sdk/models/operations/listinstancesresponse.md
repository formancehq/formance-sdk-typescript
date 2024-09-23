# ListInstancesResponse

## Example Usage

```typescript
import { ListInstancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListInstancesResponse = {
  contentType: "<value>",
  statusCode: 574325,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `listRunsResponse`                                                        | [shared.ListRunsResponse](../../../sdk/models/shared/listrunsresponse.md) | :heavy_minus_sign:                                                        | List of workflow instances                                                |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |