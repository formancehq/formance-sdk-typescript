# TestConfigResponse

## Example Usage

```typescript
import { TestConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: TestConfigResponse = {
    attemptResponse: {
        data: {
            config: {
                active: true,
                createdAt: new Date("2024-08-18T15:35:38.029Z"),
                endpoint: "https://example.com",
                eventTypes: ["TYPE1", "TYPE2"],
                id: "953f73ef-7fbc-47ab-974d-d39c0f5d2cff",
                secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
                updatedAt: new Date("2023-06-09T07:03:09.156Z"),
            },
            createdAt: new Date("2024-04-05T21:53:41.566Z"),
            id: "70a45626-d436-4813-b16d-9f5fce6c5561",
            payload: '{"data":"test"}',
            retryAttempt: 1,
            status: "success",
            statusCode: 200,
            updatedAt: new Date("2022-11-27T19:21:33.542Z"),
            webhookID: "6c3e250f-b008-4c42-a141-aac366c8dd6b",
        },
    },
    contentType: "<value>",
    statusCode: 96549,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `attemptResponse`                                                       | [shared.AttemptResponse](../../../sdk/models/shared/attemptresponse.md) | :heavy_minus_sign:                                                      | OK                                                                      |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |