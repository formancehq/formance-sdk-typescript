# UnsnoozeAlertRequest

## Example Usage

```typescript
import { UnsnoozeAlertRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: UnsnoozeAlertRequest = {
  unsnoozeAlertRequest: {
    by: "ops@buildr.com",
  },
  alertID: "7e54a864-57af-42b3-9b9c-f5d5dfdb2cb7",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `unsnoozeAlertRequest`                                                                            | [reconciliation.UnsnoozeAlertRequest](../../../sdk/models/reconciliation/unsnoozealertrequest.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `alertID`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | The alert ID.                                                                                     |