# AccountResponse

## Example Usage

```typescript
import { AccountResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: AccountResponse = {
  accountWithVolumesAndBalances: {
    volumes: {
      "USD": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
      "EUR": {
        balance: 90n,
        input: 100n,
        output: 10n,
      },
    },
    address: "users:001",
    balances: {
      "COIN": 100n,
    },
    metadata: {
      "admin": true,
      "a": {
        "nested": {
          "key": "value",
        },
      },
    },
    type: "virtual",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accountWithVolumesAndBalances`                                                                     | [ledger.AccountWithVolumesAndBalances](../../../sdk/models/ledger/accountwithvolumesandbalances.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |