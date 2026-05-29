# ReconciliationResponse

OK

## Example Usage

```typescript
import { ReconciliationResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: ReconciliationResponse = {
  reconciliation: {
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    driftBalances: {},
    id: "XXX",
    ledgerBalances: {},
    paymentsBalances: {},
    policyID: "XXX",
    reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
    reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
    status: "COMPLETED",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `reconciliation`                                                                      | [reconciliation.Reconciliation](../../../sdk/models/reconciliation/reconciliation.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |