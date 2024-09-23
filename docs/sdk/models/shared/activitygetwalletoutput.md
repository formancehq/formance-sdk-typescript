# ActivityGetWalletOutput

## Example Usage

```typescript
import { ActivityGetWalletOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityGetWalletOutput = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("720266"),
        },
      },
    },
    createdAt: new Date("2024-10-11T05:35:26.683Z"),
    id: "a635baed-de45-468a-b406-4feda58d1c0d",
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