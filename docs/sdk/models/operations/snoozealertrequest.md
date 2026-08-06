# SnoozeAlertRequest

## Example Usage

```typescript
import { SnoozeAlertRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: SnoozeAlertRequest = {
  snoozeAlertRequest: {
    by: "ops@buildr.com",
    until: new Date("2026-05-20T20:56:49.637Z"),
  },
  alertID: "f6ba0987-9185-443f-b5a8-5cb4bce4ae43",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `snoozeAlertRequest`                                                                          | [reconciliation.SnoozeAlertRequest](../../../sdk/models/reconciliation/snoozealertrequest.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `alertID`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The alert ID.                                                                                 |