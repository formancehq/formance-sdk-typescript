# AttemptResponse

## Example Usage

```typescript
import { AttemptResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AttemptResponse = {
  data: {
    config: {
      active: true,
      createdAt: new Date("2023-07-04T21:48:22.124Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "8632b3d4-b624-4cd0-8286-c8bbbd5a999f",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2023-06-29T22:55:29.320Z"),
    },
    createdAt: new Date("2025-04-14T09:43:04.593Z"),
    id: "1e575769-e005-401b-be00-67706c5f1f6c",
    payload: "{\"data\":\"test\"}",
    retryAttempt: 1,
    status: "success",
    statusCode: 200,
    updatedAt: new Date("2023-10-11T04:47:16.396Z"),
    webhookID: "16c72c96-cbb3-40c5-be46-e81556a05261",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Attempt](../../../sdk/models/shared/attempt.md) | :heavy_check_mark:                                      | N/A                                                     |