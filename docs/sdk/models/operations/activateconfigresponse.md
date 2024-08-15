# ActivateConfigResponse

## Example Usage

```typescript
import { ActivateConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ActivateConfigResponse = {
    configResponse: {
        data: {
            active: true,
            createdAt: new Date("2024-01-15T06:47:58.632Z"),
            endpoint: "https://example.com",
            eventTypes: ["TYPE1", "TYPE2"],
            id: "8d9cbf48-6333-423f-9b77-f3a4100674eb",
            secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
            updatedAt: new Date("2024-12-06T03:20:27.897Z"),
        },
    },
    contentType: "<value>",
    statusCode: 377752,
    rawResponse: new Response('{"message": "hello world"}', {
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