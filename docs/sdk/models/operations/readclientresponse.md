# ReadClientResponse

## Example Usage

```typescript
import { ReadClientResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReadClientResponse = {
  contentType: "<value>",
  statusCode: 623564,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `readClientResponse`                                                          | [shared.ReadClientResponse](../../../sdk/models/shared/readclientresponse.md) | :heavy_minus_sign:                                                            | Retrieved client                                                              |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |