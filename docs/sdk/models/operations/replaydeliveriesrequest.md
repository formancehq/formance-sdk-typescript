# ReplayDeliveriesRequest

## Example Usage

```typescript
import { ReplayDeliveriesRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ReplayDeliveriesRequest = {
  idempotencyKey: "<value>",
  replayDeliveriesRequest: {
    createdAtFrom: new Date("2026-03-24T09:54:13.168Z"),
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `replayDeliveriesRequest`                                                                   | [webhooks.ReplayDeliveriesRequest](../../../sdk/models/webhooks/replaydeliveriesrequest.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |