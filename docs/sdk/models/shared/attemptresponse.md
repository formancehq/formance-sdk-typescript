# AttemptResponse

## Example Usage

```typescript
import { AttemptResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AttemptResponse = {
  data: {
    config: {
      active: true,
      createdAt: new Date("2022-12-05T17:14:25.023Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "15b4dc35-d355-4c01-a96a-4ec1cffb194f",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2023-11-01T09:34:41.066Z"),
    },
    createdAt: new Date("2024-02-01T19:35:45.142Z"),
    id: "75e506ca-f1e5-4761-a3b0-20d92cfee094",
    payload: "{\"data\":\"test\"}",
    retryAttempt: 1,
    status: "success",
    statusCode: 200,
    updatedAt: new Date("2022-12-15T13:28:07.414Z"),
    webhookID: "277f04da-dac7-43c9-b2cf-541af2710ad5",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Attempt](../../../sdk/models/shared/attempt.md) | :heavy_check_mark:                                      | N/A                                                     |