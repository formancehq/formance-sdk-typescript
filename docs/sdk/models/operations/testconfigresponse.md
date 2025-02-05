# TestConfigResponse

## Example Usage

```typescript
import { TestConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: TestConfigResponse = {
  attemptResponse: {
    data: {
      config: {
        active: true,
        createdAt: new Date("2023-04-24T23:22:30.007Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "ac26e109-6ce4-4679-bfb6-4f2bea635bae",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2025-06-13T12:01:45.796Z"),
      },
      createdAt: new Date("2025-09-25T22:48:13.771Z"),
      id: "4568a406-4fed-4a58-bd1c-0dc0a822c9ff",
      payload: "{\"data\":\"test\"}",
      retryAttempt: 1,
      status: "success",
      statusCode: 200,
      updatedAt: new Date("2023-05-11T00:03:45.342Z"),
      webhookID: "f37c3921-1506-4a61-a142-f2c998f5c86f",
    },
  },
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
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