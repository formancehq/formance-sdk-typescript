# V2DeleteTransactionMetadataRequest

## Example Usage

```typescript
import { V2DeleteTransactionMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2DeleteTransactionMetadataRequest = {
  id: 1234n,
  key: "foo",
  ledger: "ledger001",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `idempotencyKey`       | *string*               | :heavy_minus_sign:     | Use an idempotency key |                        |
| `id`                   | *BigInt*               | :heavy_check_mark:     | Transaction ID.        | 1234                   |
| `key`                  | *string*               | :heavy_check_mark:     | The key to remove.     | foo                    |
| `ledger`               | *string*               | :heavy_check_mark:     | Name of the ledger.    | ledger001              |