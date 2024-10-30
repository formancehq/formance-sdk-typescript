# TestConfigResponse

## Example Usage

```typescript
import { TestConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: TestConfigResponse = {
  attemptResponse: {
    data: {
      config: {
        active: true,
        createdAt: new Date("2023-03-10T14:44:52.776Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "f916cbe4-c79f-4fd5-8ea6-0c8cbc4c87a0",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2022-11-17T05:26:00.288Z"),
      },
      createdAt: new Date("2024-12-13T08:34:18.669Z"),
      id: "25055fd6-0da2-4f1d-b46c-af91ecb062db",
      payload: "{\"data\":\"test\"}",
      retryAttempt: 1,
      status: "success",
      statusCode: 200,
      updatedAt: new Date("2024-11-25T08:47:29.806Z"),
      webhookID: "cf9005dd-f10e-448f-96a6-c83448bfbc25",
    },
  },
  contentType: "<value>",
  statusCode: 408,
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