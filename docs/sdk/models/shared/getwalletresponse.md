# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetWalletResponse = {
  data: {
    balances: {
      main: {
        assets: {
          "key": BigInt("700204"),
        },
      },
    },
    createdAt: new Date("2024-07-29T21:23:38.273Z"),
    id: "35811646-7ff2-4e18-825b-6cbf8c556618",
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