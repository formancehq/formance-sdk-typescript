# WalletWithBalances

## Example Usage

```typescript
import { WalletWithBalances } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WalletWithBalances = {
  balances: {
    assetHolder: {
      assets: {
        "key": 913853n,
        "key1": 950258n,
        "key2": 29699n,
      },
    },
  },
  createdAt: new Date("2026-11-21T10:02:33.334Z"),
  id: "065bc9b9-1058-43ec-8140-f6e54c982d29",
  ledger: "<value>",
  metadata: {},
  name: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `balances`                                                                                                  | [orchestration.WalletWithBalancesBalances](../../../sdk/models/orchestration/walletwithbalancesbalances.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The unique ID of the wallet.                                                                                |
| `ledger`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `metadata`                                                                                                  | Record<string, *string*>                                                                                    | :heavy_check_mark:                                                                                          | Metadata associated with the wallet.                                                                        |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |