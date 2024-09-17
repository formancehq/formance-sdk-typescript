# InsertConfigResponse

## Example Usage

```typescript
import { InsertConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: InsertConfigResponse = {
  configResponse: {
    data: {
      active: true,
      createdAt: new Date("2023-03-11T01:57:16.014Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "79d23227-15bf-40cb-b1e3-1b8b90f3443a",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2022-04-20T22:07:54.906Z"),
    },
  },
  contentType: "<value>",
  statusCode: 63038,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `configResponse`                                                      | [shared.ConfigResponse](../../../sdk/models/shared/configresponse.md) | :heavy_minus_sign:                                                    | Config created successfully.                                          |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |