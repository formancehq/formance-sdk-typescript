# Policy

A reconciliation policy pairing a ledger query with a payments pool

## Example Usage

```typescript
import { Policy } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Policy = {
  createdAt: new Date("2021-01-01T00:00:00.000Z"),
  id: "XXX",
  ledgerName: "default",
  ledgerQuery: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  name: "XXX",
  paymentsPoolID: "XXX",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the policy was created                                                                   | 2021-01-01T00:00:00.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the policy                                                               | XXX                                                                                           |
| `ledgerName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the ledger the policy reconciles against                                              | default                                                                                       |
| `ledgerQuery`                                                                                 | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | Filter selecting the ledger accounts whose balances are reconciled                            |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of the policy                                                             | XXX                                                                                           |
| `paymentsPoolID`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the payments pool the ledger side is compared against                           | XXX                                                                                           |