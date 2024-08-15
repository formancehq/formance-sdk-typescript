# ChangeConfigSecretResponse

## Example Usage

```typescript
import { ChangeConfigSecretResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ChangeConfigSecretResponse = {
    configResponse: {
        data: {
            active: true,
            createdAt: new Date("2023-11-08T22:52:26.062Z"),
            endpoint: "https://example.com",
            eventTypes: ["TYPE1", "TYPE2"],
            id: "280d1ba7-7a89-4ebf-b37a-e4203ce5e6a9",
            secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
            updatedAt: new Date("2022-12-22T20:27:39.283Z"),
        },
    },
    contentType: "<value>",
    statusCode: 831049,
    rawResponse: new Response('{"message": "hello world"}', {
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