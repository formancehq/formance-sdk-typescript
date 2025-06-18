# AccountResponse

## Example Usage

```typescript
import { AccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountResponse = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.AccountWithVolumesAndBalances](../../../sdk/models/shared/accountwithvolumesandbalances.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |