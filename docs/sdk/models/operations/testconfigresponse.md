# TestConfigResponse

## Example Usage

```typescript
import { TestConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: TestConfigResponse = {
  attemptResponse: {
    data: {
      config: {
        active: true,
        createdAt: new Date("2023-10-12T06:39:45.765Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "c79ffd5e-a60c-48cb-bc4c-87a014f25055",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2025-07-15T06:55:59.176Z"),
      },
      createdAt: new Date("2024-02-24T12:13:48.083Z"),
      id: "0da2f1d4-6caf-491e-bcb0-62dbefcf9005",
      payload: "{\"data\":\"test\"}",
      retryAttempt: 1,
      status: "success",
      statusCode: 200,
      updatedAt: new Date("2025-08-07T06:48:26.335Z"),
      webhookID: "f10e48f6-a6c8-4344-88bf-bc256a445c91",
    },
  },
  contentType: "<value>",
  statusCode: 207,
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