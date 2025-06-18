# V2AddMetadataOnTransactionRequest

## Example Usage

```typescript
import { V2AddMetadataOnTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2AddMetadataOnTransactionRequest = {
  dryRun: true,
  id: 1234n,
  ledger: "ledger001",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Use an idempotency key                                                                                             |                                                                                                                    |
| `requestBody`                                                                                                      | Record<string, *string*>                                                                                           | :heavy_check_mark:                                                                                                 | metadata                                                                                                           | {<br/>"admin": "true"<br/>}                                                                                        |
| `dryRun`                                                                                                           | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Set the dryRun mode. Dry run mode doesn't add the logs to the database or publish a message to the message broker. | true                                                                                                               |
| `id`                                                                                                               | *BigInt*                                                                                                           | :heavy_check_mark:                                                                                                 | Transaction ID.                                                                                                    | 1234                                                                                                               |
| `ledger`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of the ledger.                                                                                                | ledger001                                                                                                          |