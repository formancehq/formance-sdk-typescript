# DebitWalletRequest

A debit to apply to a wallet

## Example Usage

```typescript
import { DebitWalletRequest } from "@formance/formance-sdk/sdk/models/orchestration";

let value: DebitWalletRequest = {
  amount: {
    amount: 100n,
    asset: "USD/2",
  },
  metadata: {
    "key": "",
  },
  pending: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | [orchestration.Monetary](../../../sdk/models/orchestration/monetary.md)                       | :heavy_check_mark:                                                                            | An amount together with the asset it is denominated in                                        |
| `balances`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Names of the balances to debit from, in order. Defaults to the main balance when omitted      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable reason for the debit                                                           |
| `destination`                                                                                 | *orchestration.Subject*                                                                       | :heavy_minus_sign:                                                                            | The counterparty of a wallet movement, either a ledger account or another wallet              |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `pending`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Set to true to create a pending hold. If false, the wallet will be debited immediately.       |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | cannot be used in conjunction with `pending` property                                         |