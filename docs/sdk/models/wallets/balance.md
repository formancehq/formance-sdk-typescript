# Balance

A named balance within a wallet, optionally carrying an expiry date

## Example Usage

```typescript
import { Balance } from "@formance/formance-sdk/sdk/models/wallets";

let value: Balance = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                 | :heavy_minus_sign:                                                                                                                                            | When the funds in this balance expire. Expired funds stop counting towards available funds                                                                    |
| `name`                                                                                                                                                        | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | Name of the balance within the wallet                                                                                                                         |
| `priority`                                                                                                                                                    | *BigInt*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Ordering hint when choosing which balances to debit first. Lower values are debited first, and it only breaks ties between balances that carry no expiry date |