# AttemptResponse

## Example Usage

```typescript
import { AttemptResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AttemptResponse = {
  data: {
    config: {
      active: true,
      createdAt: new Date("2023-08-23T07:02:23.610Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "ea442c74-fc9c-41a5-9bfc-9b740a27ae93",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2025-01-01T17:04:41.851Z"),
    },
    createdAt: new Date("2023-08-03T01:37:55.590Z"),
    id: "bc8d38eb-c395-4a8a-99bc-0f62ec69366c",
    payload: "{\"data\":\"test\"}",
    retryAttempt: 1,
    status: "success",
    statusCode: 200,
    updatedAt: new Date("2025-04-07T08:08:03.743Z"),
    webhookID: "c67803dc-1a08-42d9-81ae-b1a9ac453761",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Attempt](../../../sdk/models/shared/attempt.md) | :heavy_check_mark:                                      | N/A                                                     |