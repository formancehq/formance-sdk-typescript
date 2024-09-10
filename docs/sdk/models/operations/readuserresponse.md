# ReadUserResponse

## Example Usage

```typescript
import { ReadUserResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReadUserResponse = {
  contentType: "<value>",
  readUserResponse: {
    data: {
      email: "user1@orga1.com",
      id: "3bb03708-312f-48a0-821a-e765837dc2c4",
      subject: "Jane Doe",
    },
  },
  statusCode: 623564,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `readUserResponse`                                                        | [shared.ReadUserResponse](../../../sdk/models/shared/readuserresponse.md) | :heavy_minus_sign:                                                        | Retrieved user                                                            |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |