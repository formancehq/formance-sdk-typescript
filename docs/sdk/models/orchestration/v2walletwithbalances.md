# V2WalletWithBalances

## Example Usage

```typescript
import { V2WalletWithBalances } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WalletWithBalances = {
  balances: {
    v2AssetHolder: {
      assets: {},
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
| `balances`                                                                                                      | [orchestration.V2WalletWithBalancesBalances](../../../sdk/models/orchestration/v2walletwithbalancesbalances.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `createdAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The unique ID of the wallet.                                                                                    |
| `ledger`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `metadata`                                                                                                      | Record<string, *string*>                                                                                        | :heavy_check_mark:                                                                                              | Metadata associated with the wallet.                                                                            |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |