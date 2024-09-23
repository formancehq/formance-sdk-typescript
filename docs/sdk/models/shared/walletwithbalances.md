# WalletWithBalances

## Example Usage

```typescript
import { WalletWithBalances } from "@formance/formance-sdk/sdk/models/shared";

let value: WalletWithBalances = {
  balances: {
    main: {
      assets: {
        "key": BigInt("24577"),
      },
    },
  },
  createdAt: new Date("2023-11-26T20:23:31.121Z"),
  id: "34cf5d1a-c26e-4109-a6ce-4679fb64f2be",
  ledger: "<value>",
  metadata: {
    "key": "<value>",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balances`                                                                                    | [shared.WalletWithBalancesBalances](../../../sdk/models/shared/walletwithbalancesbalances.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the wallet.                                                                  |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |