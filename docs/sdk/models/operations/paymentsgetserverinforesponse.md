# PaymentsgetServerInfoResponse

## Example Usage

```typescript
import { PaymentsgetServerInfoResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: PaymentsgetServerInfoResponse = {
  contentType: "<value>",
  statusCode: 904045,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `serverInfo`                                                          | [shared.ServerInfo](../../../sdk/models/shared/serverinfo.md)         | :heavy_minus_sign:                                                    | Server information                                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |