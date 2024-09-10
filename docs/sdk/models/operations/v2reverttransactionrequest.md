# V2RevertTransactionRequest

## Example Usage

```typescript
import { V2RevertTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2RevertTransactionRequest = {
  id: BigInt("1234"),
  ledger: "ledger001",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `atEffectiveDate`                                       | *boolean*                                               | :heavy_minus_sign:                                      | Revert transaction at effective date of the original tx |                                                         |
| `force`                                                 | *boolean*                                               | :heavy_minus_sign:                                      | Force revert                                            |                                                         |
| `id`                                                    | *BigInt*                                                | :heavy_check_mark:                                      | Transaction ID.                                         | 1234                                                    |
| `ledger`                                                | *string*                                                | :heavy_check_mark:                                      | Name of the ledger.                                     | ledger001                                               |