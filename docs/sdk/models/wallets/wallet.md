# Wallet

A wallet backed by a set of ledger accounts

## Example Usage

```typescript
import { Wallet } from "@formance/formance-sdk/sdk/models/wallets";

let value: Wallet = {
  createdAt: new Date("2024-06-24T19:04:54.503Z"),
  id: "a7f8ccb0-b4bc-4550-85e4-b930132acba1",
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balances`                                                                                    | [wallets.WalletBalances](../../../sdk/models/wallets/walletbalances.md)                       | :heavy_minus_sign:                                                                            | The wallet's main balance, keyed by asset                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the wallet was created                                                                   |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the wallet.                                                                  |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the ledger backing this wallet                                                        |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of the wallet                                                             |