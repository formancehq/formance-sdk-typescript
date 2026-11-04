# GetTransactionLedgerRequest

## Example Usage

```typescript
import { GetTransactionLedgerRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: GetTransactionLedgerRequest = {
  ledger: "ledger001",
  txid: 1234n,
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `ledger`            | *string*            | :heavy_check_mark:  | Name of the ledger. | ledger001           |
| `txid`              | *BigInt*            | :heavy_check_mark:  | Transaction ID.     | 1234                |