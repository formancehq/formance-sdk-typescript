# V3ConnectorScheduleResponse

## Example Usage

```typescript
import { V3ConnectorScheduleResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConnectorScheduleResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2026-11-27T17:15:53.591Z"),
    id: "<id>",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [payments.V3Schedule](../../../sdk/models/payments/v3schedule.md) | :heavy_check_mark:                                                | A recurring job a connector runs to fetch data from its provider  |