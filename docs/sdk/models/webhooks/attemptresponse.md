# AttemptResponse

## Example Usage

```typescript
import { AttemptResponse } from "@formance/formance-sdk/sdk/models/webhooks";

let value: AttemptResponse = {
  attempt: {
    webhooksConfig: {
      active: true,
      createdAt: new Date("2024-11-13T13:49:09.341Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "b8e390eb-003d-4426-ad52-6efeacc557f0",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2025-04-05T22:32:32.491Z"),
    },
    createdAt: new Date("2024-07-03T21:48:22.124Z"),
    id: "8632b3d4-b624-4cd0-8286-c8bbbd5a999f",
    payload: "{\"data\":\"test\"}",
    retryAttempt: 1,
    status: "success",
    statusCode: 200,
    updatedAt: new Date("2024-06-28T22:55:29.320Z"),
    webhookID: "c1e57576-9e00-4501-bbe0-067706c5f1f6",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `attempt`                                                   | [webhooks.Attempt](../../../sdk/models/webhooks/attempt.md) | :heavy_check_mark:                                          | N/A                                                         |