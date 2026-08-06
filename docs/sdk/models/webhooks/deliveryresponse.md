# DeliveryResponse

## Example Usage

```typescript
import { DeliveryResponse } from "@formance/formance-sdk/sdk/models/webhooks";

let value: DeliveryResponse = {
  data: {
    attemptCount: 798238,
    configID: "cd719ad6-6384-40be-a9e2-5c68d9bc0412",
    createdAt: new Date("2025-09-29T12:03:27.724Z"),
    eventID: "<id>",
    eventType: "<value>",
    id: "0333c817-9daa-42f5-a280-dae53bd1b386",
    replayGeneration: 464587,
    status: "pending",
    updatedAt: new Date("2024-02-16T21:27:18.515Z"),
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [webhooks.Delivery](../../../sdk/models/webhooks/delivery.md) | :heavy_check_mark:                                            | N/A                                                           |