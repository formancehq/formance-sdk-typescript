# ReconciliationResponse

## Example Usage

```typescript
import { ReconciliationResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ReconciliationResponse = {
  data: {
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    driftBalances: {
      "key": BigInt("877619"),
    },
    id: "XXX",
    ledgerBalances: {
      "key": BigInt("623868"),
    },
    paymentsBalances: {
      "key": BigInt("17029"),
    },
    policyID: "XXX",
    reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
    reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
    status: "COMPLETED",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.Reconciliation](../../../sdk/models/shared/reconciliation.md) | :heavy_check_mark:                                                    | N/A                                                                   |