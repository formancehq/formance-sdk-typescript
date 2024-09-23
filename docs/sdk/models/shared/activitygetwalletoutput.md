# ActivityGetWalletOutput

## Example Usage

```typescript
import { ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("522062"),
        },
      },
    },
    createdAt: new Date("2022-02-08T12:51:00.758Z"),
    id: "ed8df1af-f929-403f-95a4-fb5c163a1648",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [shared.WalletWithBalances](../../../sdk/models/shared/walletwithbalances.md) | :heavy_check_mark:                                                            | N/A                                                                           |