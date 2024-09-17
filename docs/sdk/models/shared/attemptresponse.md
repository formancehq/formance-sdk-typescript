# AttemptResponse

## Example Usage

```typescript
import { AttemptResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AttemptResponse = {
  data: {
    config: {
      active: true,
      createdAt: new Date("2024-10-29T15:13:36.922Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "5e9d9a45-78ad-4c1a-8600-dec001ac802e",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2022-06-12T14:57:34.018Z"),
    },
    createdAt: new Date("2024-09-11T07:54:38.902Z"),
    id: "c09ff8f0-f816-4ff3-877c-13e902c14125",
    payload: "{\"data\":\"test\"}",
    retryAttempt: 1,
    status: "success",
    statusCode: 200,
    updatedAt: new Date("2024-02-08T18:41:51.391Z"),
    webhookID: "0960a668-151a-4472-af92-3c5949f83f35",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Attempt](../../../sdk/models/shared/attempt.md) | :heavy_check_mark:                                      | N/A                                                     |