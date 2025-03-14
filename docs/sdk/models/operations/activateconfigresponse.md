# ActivateConfigResponse

## Example Usage

```typescript
import { ActivateConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ActivateConfigResponse = {
  configResponse: {
    data: {
      active: true,
      createdAt: new Date("2025-11-26T04:51:12.762Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "d90be851-ce1c-40f9-984e-4dfc81773652",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2023-10-16T00:41:24.184Z"),
    },
  },
  contentType: "<value>",
  statusCode: 300,
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