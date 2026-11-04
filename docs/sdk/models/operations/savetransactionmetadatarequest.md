# SaveTransactionMetadataRequest

## Example Usage

```typescript
import { SaveTransactionMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: SaveTransactionMetadataRequest = {
  requestBody: {
    "reason": "correction",
    "source": "support",
    "priority": 1,
  },
  ledgerName: "<value>",
  transactionId: 296240,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `idempotencyKey`                                               | *string*                                                       | :heavy_minus_sign:                                             | Idempotency key for the request                                |                                                                |
| `requestBody`                                                  | Record<string, *ledgerV3.MetadataValue*>                       | :heavy_check_mark:                                             | N/A                                                            | {<br/>"reason": "correction",<br/>"source": "support",<br/>"priority": 1<br/>} |
| `ledgerName`                                                   | *string*                                                       | :heavy_check_mark:                                             | Name of the ledger                                             |                                                                |
| `transactionId`                                                | *number*                                                       | :heavy_check_mark:                                             | Transaction ID                                                 |                                                                |