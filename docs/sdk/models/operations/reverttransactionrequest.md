# RevertTransactionRequest

## Example Usage

```typescript
import { RevertTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: RevertTransactionRequest = {
  ledger: "ledger001",
  txid: 1234n,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `disableChecks`                  | *boolean*                        | :heavy_minus_sign:               | Allow to disable balances checks |                                  |
| `ledger`                         | *string*                         | :heavy_check_mark:               | Name of the ledger.              | ledger001                        |
| `txid`                           | *BigInt*                         | :heavy_check_mark:               | Transaction ID.                  | 1234                             |