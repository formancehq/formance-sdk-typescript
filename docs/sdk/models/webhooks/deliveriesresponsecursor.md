# DeliveriesResponseCursor

## Example Usage

```typescript
import { DeliveriesResponseCursor } from "@formance/formance-sdk/sdk/models/webhooks";

let value: DeliveriesResponseCursor = {
  data: [
    {
      attemptCount: 628748,
      configID: "06747bcf-7f5e-47d6-b164-fc36fac4ae83",
      createdAt: new Date("2024-12-21T02:54:18.842Z"),
      eventID: "<id>",
      eventType: "<value>",
      id: "cfefc239-3c57-4022-b609-a3f3da688944",
      replayGeneration: 227893,
      status: "succeeded",
      updatedAt: new Date("2024-09-16T04:57:29.900Z"),
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [webhooks.Delivery](../../../sdk/models/webhooks/delivery.md)[] | :heavy_check_mark:                                              | N/A                                                             |
| `hasMore`                                                       | *boolean*                                                       | :heavy_check_mark:                                              | N/A                                                             |
| `next`                                                          | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `pageSize`                                                      | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |