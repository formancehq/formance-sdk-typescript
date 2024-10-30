# AttemptResponse

## Example Usage

```typescript
import { AttemptResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AttemptResponse = {
  data: {
    config: {
      active: true,
      createdAt: new Date("2023-07-27T18:43:26.946Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "a9bc0f62-ec69-4366-8c6c-c67803dc1a08",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2024-07-24T09:12:37.931Z"),
    },
    createdAt: new Date("2023-11-05T20:05:58.553Z"),
    id: "1aeb1a9a-c453-4761-a318-25d98f6e965e",
    payload: "{\"data\":\"test\"}",
    retryAttempt: 1,
    status: "success",
    statusCode: 200,
    updatedAt: new Date("2022-10-03T21:04:24.953Z"),
    webhookID: "8332bc56-c054-48e0-8d89-f24379b06e7d",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Attempt](../../../sdk/models/shared/attempt.md) | :heavy_check_mark:                                      | N/A                                                     |