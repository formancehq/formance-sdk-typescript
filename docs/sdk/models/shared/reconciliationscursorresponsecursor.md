# ReconciliationsCursorResponseCursor

## Example Usage

```typescript
import { ReconciliationsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ReconciliationsCursorResponseCursor = {
  data: [
    {
      createdAt: new Date("2021-01-01T00:00:00.000Z"),
      driftBalances: {
        "key": BigInt("321724"),
      },
      id: "XXX",
      ledgerBalances: {
        "key": BigInt("790534"),
      },
      paymentsBalances: {
        "key": BigInt("381445"),
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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.Reconciliation](../../../sdk/models/shared/reconciliation.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `hasMore`                                                               | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     | false                                                                   |
| `next`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `pageSize`                                                              | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | 15                                                                      |
| `previous`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                            |