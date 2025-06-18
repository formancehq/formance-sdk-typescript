# V2DeleteAccountMetadataRequest

## Example Usage

```typescript
import { V2DeleteAccountMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2DeleteAccountMetadataRequest = {
  address: "77484 Jane Mill",
  key: "foo",
  ledger: "ledger001",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `idempotencyKey`       | *string*               | :heavy_minus_sign:     | Use an idempotency key |                        |
| `address`              | *string*               | :heavy_check_mark:     | Account address        |                        |
| `key`                  | *string*               | :heavy_check_mark:     | The key to remove.     | foo                    |
| `ledger`               | *string*               | :heavy_check_mark:     | Name of the ledger.    | ledger001              |