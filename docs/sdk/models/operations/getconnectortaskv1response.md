# GetConnectorTaskV1Response

## Example Usage

```typescript
import { GetConnectorTaskV1Response } from "@formance/formance-sdk/sdk/models/operations";

let value: GetConnectorTaskV1Response = {
  contentType: "<value>",
  statusCode: 565421,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `taskResponse`                                                        | [shared.TaskResponse](../../../sdk/models/shared/taskresponse.md)     | :heavy_minus_sign:                                                    | OK                                                                    |