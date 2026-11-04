# Reconciliation

One run of a policy, comparing both sides and reporting the drift between them

## Example Usage

```typescript
import { Reconciliation } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Reconciliation = {
  createdAt: new Date("2021-01-01T00:00:00.000Z"),
  driftBalances: {
    "key": 823949n,
    "key1": 832321n,
  },
  id: "XXX",
  ledgerBalances: {
    "key": 640122n,
    "key1": 826430n,
  },
  paymentsBalances: {},
  policyID: "XXX",
  reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
  reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
  status: "COMPLETED",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the reconciliation was run                                                               | 2021-01-01T00:00:00.000Z                                                                      |
| `driftBalances`                                                                               | Record<string, *BigInt*>                                                                      | :heavy_check_mark:                                                                            | Difference between the two sides, keyed by asset. All-zero means the sides agree              |                                                                                               |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the run failed, when its status reports an error                                          |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the reconciliation run                                                   | XXX                                                                                           |
| `ledgerBalances`                                                                              | Record<string, *BigInt*>                                                                      | :heavy_check_mark:                                                                            | Balances observed on the ledger side, keyed by asset                                          |                                                                                               |
| `paymentsBalances`                                                                            | Record<string, *BigInt*>                                                                      | :heavy_check_mark:                                                                            | Balances observed on the payments side, keyed by asset                                        |                                                                                               |
| `policyID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the policy this run applied                                                     | XXX                                                                                           |
| `reconciledAtLedger`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Point in time at which the ledger side was evaluated                                          | 2021-01-01T00:00:00.000Z                                                                      |
| `reconciledAtPayments`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Point in time at which the payments side was evaluated                                        | 2021-01-01T00:00:00.000Z                                                                      |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Outcome of the reconciliation run                                                             | COMPLETED                                                                                     |