# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletResponse = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("482062"),
        },
      },
    },
    createdAt: new Date("2023-05-12T14:37:32.147Z"),
    id: "c7c28d27-92c1-4f75-916a-14da32e42f41",
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