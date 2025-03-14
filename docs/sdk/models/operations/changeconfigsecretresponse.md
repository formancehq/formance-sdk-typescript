# ChangeConfigSecretResponse

## Example Usage

```typescript
import { ChangeConfigSecretResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ChangeConfigSecretResponse = {
  configResponse: {
    data: {
      active: true,
      createdAt: new Date("2025-09-20T05:30:40.558Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "d8df1aff-9290-43f5-aa4f-b5c163a16485",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2023-01-27T22:28:26.570Z"),
    },
  },
  contentType: "<value>",
  statusCode: 406,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `configResponse`                                                      | [shared.ConfigResponse](../../../sdk/models/shared/configresponse.md) | :heavy_minus_sign:                                                    | Secret successfully changed.                                          |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |