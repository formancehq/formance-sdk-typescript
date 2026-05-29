# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/wallets";

let value: GetWalletResponse = {
  walletWithBalances: {
    balances: {
      assetHolder: {
        assets: {
          "key": 390928n,
        },
      },
    },
    createdAt: new Date("2026-10-11T19:41:39.583Z"),
    id: "ef0ebc4c-aaad-411c-842c-11045a66a52f",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `walletWithBalances`                                                            | [wallets.WalletWithBalances](../../../sdk/models/wallets/walletwithbalances.md) | :heavy_check_mark:                                                              | N/A                                                                             |