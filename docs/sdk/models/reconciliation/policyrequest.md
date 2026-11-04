# PolicyRequest

## Example Usage

```typescript
import { PolicyRequest } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: PolicyRequest = {
  ledgerName: "default",
  ledgerQuery: {
    "key": "<value>",
  },
  name: "XXX",
  paymentsPoolID: "XXX",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ledgerName`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Name of the ledger the policy reconciles against                    | default                                                             |
| `ledgerQuery`                                                       | Record<string, *any*>                                               | :heavy_check_mark:                                                  | Filter selecting the ledger accounts whose balances are reconciled  |                                                                     |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | Human-readable name for the policy                                  | XXX                                                                 |
| `paymentsPoolID`                                                    | *string*                                                            | :heavy_check_mark:                                                  | Identifier of the payments pool the ledger side is compared against | XXX                                                                 |