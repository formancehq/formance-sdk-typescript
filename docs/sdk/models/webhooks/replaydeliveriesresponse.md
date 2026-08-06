# ReplayDeliveriesResponse

## Example Usage

```typescript
import { ReplayDeliveriesResponse } from "@formance/formance-sdk/sdk/models/webhooks";

let value: ReplayDeliveriesResponse = {
  data: {
    createdAtTo: new Date("2025-05-24T06:26:32.350Z"),
    expedited: 936861,
    hasMore: true,
    replayed: 429520,
    skipped: 492096,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [webhooks.ReplayDeliveriesResult](../../../sdk/models/webhooks/replaydeliveriesresult.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |