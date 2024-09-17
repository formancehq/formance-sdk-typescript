# ChangeConfigSecretResponse

## Example Usage

```typescript
import { ChangeConfigSecretResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ChangeConfigSecretResponse = {
  configResponse: {
    data: {
      active: true,
      createdAt: new Date("2023-09-17T06:03:43.855Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "b77f3a41-0067-44eb-b692-80d1ba77a89e",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2024-02-23T07:23:17.235Z"),
    },
  },
  contentType: "<value>",
  statusCode: 990339,
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