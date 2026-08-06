# AckAlertRequest

## Example Usage

```typescript
import { AckAlertRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: AckAlertRequest = {
  ackAlertRequest: {
    by: "ops@buildr.com",
  },
  alertID: "7499ff59-8807-4a84-894d-d92a2b97b2b3",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ackAlertRequest`                                                                       | [reconciliation.AckAlertRequest](../../../sdk/models/reconciliation/ackalertrequest.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `alertID`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | The alert ID.                                                                           |