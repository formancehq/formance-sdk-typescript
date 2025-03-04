# ReconciliationsCursorResponse

OK

## Example Usage

```typescript
import { ReconciliationsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ReconciliationsCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2021-01-01T00:00:00.000Z"),
        driftBalances: {
          "key": BigInt("901496"),
        },
        id: "XXX",
        ledgerBalances: {
          "key": BigInt("189530"),
        },
        paymentsBalances: {
          "key": BigInt("930547"),
        },
        policyID: "XXX",
        reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
        reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
        status: "COMPLETED",
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                        | [shared.ReconciliationsCursorResponseCursor](../../../sdk/models/shared/reconciliationscursorresponsecursor.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |