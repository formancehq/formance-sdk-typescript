# DeliveryAttemptsResponse

## Example Usage

```typescript
import { DeliveryAttemptsResponse } from "@formance/formance-sdk/sdk/models/webhooks";

let value: DeliveryAttemptsResponse = {
  cursor: {
    data: [
      {
        attemptNumber: 780139,
        createdAt: new Date("2025-09-14T02:49:20.369Z"),
        deliveryID: "13164c8f-8fef-454a-b809-4146095d4fd7",
        endpoint: "https://dismal-giggle.name/",
        id: "ae1edf65-0c0e-487f-bd2e-ee55fd038ea7",
        outcome: "permanent_failure",
        replayGeneration: 150156,
        statusCode: 925677,
      },
    ],
    hasMore: true,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [webhooks.DeliveryAttemptsResponseCursor](../../../sdk/models/webhooks/deliveryattemptsresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |