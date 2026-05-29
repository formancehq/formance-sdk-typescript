# GetWalletResponse

## Example Usage

```typescript
import { GetWalletResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: GetWalletResponse = {
  walletWithBalances: {
    balances: {
      assetHolder: {
        assets: {
          "key": 913853n,
          "key1": 950258n,
          "key2": 29699n,
        },
      },
    },
    createdAt: new Date("2026-10-07T13:33:51.758Z"),
    id: "bc4caaad-11c4-42c1-a104-5a66a52f266e",
    ledger: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `walletWithBalances`                                                                        | [orchestration.WalletWithBalances](../../../sdk/models/orchestration/walletwithbalances.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |