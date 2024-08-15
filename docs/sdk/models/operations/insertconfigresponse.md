# InsertConfigResponse

## Example Usage

```typescript
import { InsertConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: InsertConfigResponse = {
    configResponse: {
        data: {
            active: true,
            createdAt: new Date("2024-09-17T11:26:38.503Z"),
            endpoint: "https://example.com",
            eventTypes: ["TYPE1", "TYPE2"],
            id: "31b8b90f-3443-4a11-88e0-adcf4b921879",
            secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
            updatedAt: new Date("2024-12-07T08:01:55.338Z"),
        },
    },
    contentType: "<value>",
    statusCode: 787542,
    rawResponse: new Response('{"message": "hello world"}', {
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