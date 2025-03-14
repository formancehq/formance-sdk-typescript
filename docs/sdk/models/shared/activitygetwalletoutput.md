# ActivityGetWalletOutput

## Example Usage

```typescript
import { ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("80448"),
        },
      },
    },
    createdAt: new Date("2024-10-20T22:41:41.776Z"),
    id: "d3cec103-496b-4525-aef3-c4e2a1fbd979",
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