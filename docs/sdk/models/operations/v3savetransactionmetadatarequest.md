# V3SaveTransactionMetadataRequest

## Example Usage

```typescript
import { V3SaveTransactionMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3SaveTransactionMetadataRequest = {
  requestBody: {
    "reason": "correction",
    "source": "support",
    "priority": 1,
  },
  ledgerName: "<value>",
  transactionId: 924367,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `idempotencyKey`                                               | *string*                                                       | :heavy_minus_sign:                                             | Idempotency key for the request                                |                                                                |
| `requestBody`                                                  | Record<string, *ledgerV3.MetadataValue*>                       | :heavy_check_mark:                                             | N/A                                                            | {<br/>"reason": "correction",<br/>"source": "support",<br/>"priority": 1<br/>} |
| `ledgerName`                                                   | *string*                                                       | :heavy_check_mark:                                             | Name of the ledger                                             |                                                                |
| `transactionId`                                                | *number*                                                       | :heavy_check_mark:                                             | Transaction ID                                                 |                                                                |