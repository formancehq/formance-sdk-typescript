# CreditWalletRequest

A credit to apply to a wallet

## Example Usage

```typescript
import { CreditWalletRequest } from "@formance/formance-sdk/sdk/models/orchestration";

let value: CreditWalletRequest = {
  amount: {
    amount: 100n,
    asset: "USD/2",
  },
  metadata: {
    "key": "",
  },
  sources: [],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                | [orchestration.Monetary](../../../sdk/models/orchestration/monetary.md)                                                                                 | :heavy_check_mark:                                                                                                                                      | An amount together with the asset it is denominated in                                                                                                  |
| `balance`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The balance to credit                                                                                                                                   |
| `metadata`                                                                                                                                              | Record<string, *string*>                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Metadata associated with the wallet.                                                                                                                    |
| `reference`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional caller-supplied identifier used to deduplicate the credit                                                                                      |
| `sources`                                                                                                                                               | *orchestration.Subject*[]                                                                                                                               | :heavy_check_mark:                                                                                                                                      | Where the funds come from                                                                                                                               |
| `timestamp`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The transaction time to record on the resulting transaction. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |