# AcceptAlertRequest

## Example Usage

```typescript
import { AcceptAlertRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: AcceptAlertRequest = {
  acceptAlertRequest: {
    by: "<value>",
    note: "<value>",
  },
  alertID: "f62163e0-3dac-4b79-86e5-da207a12526c",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `acceptAlertRequest`                                                                          | [reconciliation.AcceptAlertRequest](../../../sdk/models/reconciliation/acceptalertrequest.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `alertID`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The alert ID.                                                                                 |