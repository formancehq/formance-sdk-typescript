# Reconciliation

## Example Usage

```typescript
import { Reconciliation } from "@formance/formance-sdk/sdk/models/shared";

let value: Reconciliation = {
  createdAt: new Date("2021-01-01T00:00:00.000Z"),
  driftBalances: {
    "key": BigInt("495617"),
  },
  id: "XXX",
  ledgerBalances: {
    "key": BigInt("220104"),
  },
  paymentsBalances: {
    "key": BigInt("118041"),
  },
  policyID: "XXX",
  reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
  reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
  status: "COMPLETED",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T00:00:00.000Z                                                                      |
| `driftBalances`                                                                               | Record<string, *BigInt*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
| `ledgerBalances`                                                                              | Record<string, *BigInt*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentsBalances`                                                                            | Record<string, *BigInt*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `policyID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
| `reconciledAtLedger`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T00:00:00.000Z                                                                      |
| `reconciledAtPayments`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T00:00:00.000Z                                                                      |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | COMPLETED                                                                                     |