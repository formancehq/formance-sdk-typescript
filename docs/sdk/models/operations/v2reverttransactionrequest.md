# V2RevertTransactionRequest

## Example Usage

```typescript
import { V2RevertTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2RevertTransactionRequest = {
  dryRun: true,
  id: BigInt("1234"),
  ledger: "ledger001",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `atEffectiveDate`                                                                                                  | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Revert transaction at effective date of the original tx                                                            |                                                                                                                    |
| `dryRun`                                                                                                           | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Set the dryRun mode. dry run mode doesn't add the logs to the database or publish a message to the message broker. | true                                                                                                               |
| `force`                                                                                                            | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Force revert                                                                                                       |                                                                                                                    |
| `id`                                                                                                               | *BigInt*                                                                                                           | :heavy_check_mark:                                                                                                 | Transaction ID.                                                                                                    | 1234                                                                                                               |
| `ledger`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of the ledger.                                                                                                | ledger001                                                                                                          |