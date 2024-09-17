# ActivateConfigResponse

## Example Usage

```typescript
import { ActivateConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ActivateConfigResponse = {
  configResponse: {
    data: {
      active: true,
      createdAt: new Date("2024-10-31T18:07:33.348Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "e9b90c28-909b-43fe-89a8-d9cbf4863332",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2022-08-28T17:59:00.140Z"),
    },
  },
  contentType: "<value>",
  statusCode: 944373,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `configResponse`                                                      | [shared.ConfigResponse](../../../sdk/models/shared/configresponse.md) | :heavy_minus_sign:                                                    | Config successfully activated.                                        |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |