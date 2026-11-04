# WalletWithBalances

A wallet together with the funds it currently holds

## Example Usage

```typescript
import { WalletWithBalances } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WalletWithBalances = {
  balances: {
    main: {
      assets: {},
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
| `balances`                                                                                                  | [orchestration.WalletWithBalancesBalances](../../../sdk/models/orchestration/walletwithbalancesbalances.md) | :heavy_check_mark:                                                                                          | Aggregated funds held by the wallet, keyed by asset                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | When the wallet was created                                                                                 |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The unique ID of the wallet.                                                                                |
| `ledger`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Name of the ledger backing this wallet                                                                      |
| `metadata`                                                                                                  | Record<string, *string*>                                                                                    | :heavy_check_mark:                                                                                          | Metadata associated with the wallet.                                                                        |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Human-readable name of the wallet                                                                           |