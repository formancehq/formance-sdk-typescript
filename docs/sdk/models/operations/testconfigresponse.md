# TestConfigResponse

## Example Usage

```typescript
import { TestConfigResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: TestConfigResponse = {
  attemptResponse: {
    data: {
      config: {
        active: true,
        createdAt: new Date("2024-08-23T21:19:59.665Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "8bf4ca9c-f02c-4183-b4b0-d788a515285f",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2024-11-10T15:47:28.185Z"),
      },
      createdAt: new Date("2024-11-07T18:38:53.264Z"),
      id: "fec5537f-e10e-483a-ba14-0323a012544c",
      payload: "{\"data\":\"test\"}",
      retryAttempt: 1,
      status: "success",
      statusCode: 200,
      updatedAt: new Date("2024-08-08T05:45:19.091Z"),
      webhookID: "f61647a7-eeb7-426b-941e-b9cd7ee4988f",
    },
  },
  contentType: "<value>",
  statusCode: 510,
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