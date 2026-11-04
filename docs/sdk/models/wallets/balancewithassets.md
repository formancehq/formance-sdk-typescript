# BalanceWithAssets

A named balance within a wallet together with the amounts it holds per asset

## Example Usage

```typescript
import { BalanceWithAssets } from "@formance/formance-sdk/sdk/models/wallets";

let value: BalanceWithAssets = {
  assets: {
    "key": 878260n,
    "key1": 108787n,
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets`                                                                                                                                                      | Record<string, *BigInt*>                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | Amounts held, keyed by asset                                                                                                                                  |
| `expiresAt`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                 | :heavy_minus_sign:                                                                                                                                            | When the funds in this balance expire. Expired funds stop counting towards available funds                                                                    |
| `name`                                                                                                                                                        | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | Name of the balance within the wallet                                                                                                                         |
| `priority`                                                                                                                                                    | *BigInt*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Ordering hint when choosing which balances to debit first. Lower values are debited first, and it only breaks ties between balances that carry no expiry date |