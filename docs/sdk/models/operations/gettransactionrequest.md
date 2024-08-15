# GetTransactionRequest

## Example Usage

```typescript
import { GetTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: GetTransactionRequest = {
    ledger: "ledger001",
    txid: BigInt("1234"),
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `ledger`            | *string*            | :heavy_check_mark:  | Name of the ledger. | ledger001           |
| `txid`              | *BigInt*            | :heavy_check_mark:  | Transaction ID.     | 1234                |