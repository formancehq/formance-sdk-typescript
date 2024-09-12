# RevertTransactionRequest

## Example Usage

```typescript
import { RevertTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: RevertTransactionRequest = {
  ledger: "ledger001",
  txid: BigInt("1234"),
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `disableChecks`                  | *boolean*                        | :heavy_minus_sign:               | Allow to disable balances checks |                                  |
| `ledger`                         | *string*                         | :heavy_check_mark:               | Name of the ledger.              | ledger001                        |
| `txid`                           | *BigInt*                         | :heavy_check_mark:               | Transaction ID.                  | 1234                             |