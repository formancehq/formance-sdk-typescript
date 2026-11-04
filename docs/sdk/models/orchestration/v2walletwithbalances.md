# V2WalletWithBalances

A wallet together with the funds it currently holds

## Example Usage

```typescript
import { V2WalletWithBalances } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WalletWithBalances = {
  balances: {
    main: {
      assets: {
        "key": 657071n,
        "key1": 59154n,
        "key2": 638674n,
      },
    },
  },
  createdAt: new Date("2024-09-18T05:08:10.815Z"),
  id: "7400a0a5-b18b-48ae-91d8-160845e2bf7f",
  ledger: "<value>",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `balances`                                                                                                      | [orchestration.V2WalletWithBalancesBalances](../../../sdk/models/orchestration/v2walletwithbalancesbalances.md) | :heavy_check_mark:                                                                                              | Aggregated funds held by the wallet, keyed by asset                                                             |
| `createdAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | When the wallet was created                                                                                     |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The unique ID of the wallet.                                                                                    |
| `ledger`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Name of the ledger backing this wallet                                                                          |
| `metadata`                                                                                                      | Record<string, *string*>                                                                                        | :heavy_check_mark:                                                                                              | Metadata associated with the wallet.                                                                            |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Human-readable name of the wallet                                                                               |