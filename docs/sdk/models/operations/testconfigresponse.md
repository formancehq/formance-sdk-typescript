# TestConfigResponse

## Example Usage

```typescript
import { TestConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: TestConfigResponse = {
  attemptResponse: {
    data: {
      config: {
        active: true,
        createdAt: new Date("2022-01-19T00:09:54.075Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "8e0adcf4-b921-4879-bce9-53f73ef7fbc7",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2023-11-22T23:18:08.988Z"),
      },
      createdAt: new Date("2024-02-16T13:39:01.828Z"),
      id: "d74dd39c-0f5d-42cf-b7c7-0a45626d4368",
      payload: "{\"data\":\"test\"}",
      retryAttempt: 1,
      status: "success",
      statusCode: 200,
      updatedAt: new Date("2022-05-13T05:45:41.889Z"),
      webhookID: "3f16d9f5-fce6-4c55-a146-c3e250fb008c",
    },
  },
  contentType: "<value>",
  statusCode: 304582,
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