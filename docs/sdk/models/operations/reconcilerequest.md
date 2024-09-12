# ReconcileRequest

## Example Usage

```typescript
import { ReconcileRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ReconcileRequest = {
  reconciliationRequest: {
    reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
    reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
  },
  policyID: "XXX",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `reconciliationRequest`                                                             | [shared.ReconciliationRequest](../../../sdk/models/shared/reconciliationrequest.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |                                                                                     |
| `policyID`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | The policy ID.                                                                      | XXX                                                                                 |