# AddMetadataOnTransactionRequest

## Example Usage

```typescript
import { AddMetadataOnTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: AddMetadataOnTransactionRequest = {
  requestBody: {
    "key": "<value>",
  },
  ledger: "ledger001",
  txid: BigInt("1234"),
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `requestBody`         | Record<string, *any*> | :heavy_check_mark:    | metadata              |                       |
| `ledger`              | *string*              | :heavy_check_mark:    | Name of the ledger.   | ledger001             |
| `txid`                | *BigInt*              | :heavy_check_mark:    | Transaction ID.       | 1234                  |