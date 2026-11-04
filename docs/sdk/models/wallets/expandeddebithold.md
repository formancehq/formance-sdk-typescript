# ExpandedDebitHold

A hold together with the amounts it currently locks and has already released

## Example Usage

```typescript
import { ExpandedDebitHold } from "@formance/formance-sdk/sdk/models/wallets";

let value: ExpandedDebitHold = {
  asset: "<value>",
  description:
    "enraged bah below inborn judgementally but restfully despite surprisingly",
  id: "b901ad5b-3b9e-4559-8c6e-8fdb4664a935",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  originalAmount: 100n,
  remaining: 10n,
  walletID: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `asset`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | Asset the held funds are denominated in                                          |                                                                                  |
| `description`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Human-readable reason the funds were held                                        |                                                                                  |
| `destination`                                                                    | *wallets.Subject*                                                                | :heavy_minus_sign:                                                               | The counterparty of a wallet movement, either a ledger account or another wallet |                                                                                  |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The unique ID of the hold.                                                       |                                                                                  |
| `metadata`                                                                       | Record<string, *string*>                                                         | :heavy_check_mark:                                                               | Metadata associated with the hold.                                               |                                                                                  |
| `originalAmount`                                                                 | *BigInt*                                                                         | :heavy_check_mark:                                                               | Original amount on hold                                                          | 100                                                                              |
| `remaining`                                                                      | *BigInt*                                                                         | :heavy_check_mark:                                                               | Remaining amount on hold                                                         | 10                                                                               |
| `walletID`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the wallet the hold is associated with.                                |                                                                                  |