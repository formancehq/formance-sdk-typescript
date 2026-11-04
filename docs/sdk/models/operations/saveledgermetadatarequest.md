# SaveLedgerMetadataRequest

## Example Usage

```typescript
import { SaveLedgerMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: SaveLedgerMetadataRequest = {
  requestBody: {
    "environment": "production",
    "team": "payments",
    "region": "eu-west-1",
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `idempotencyKey`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | Idempotency key for the request                                            |                                                                            |
| `requestBody`                                                              | Record<string, *ledgerV3.MetadataValue*>                                   | :heavy_check_mark:                                                         | N/A                                                                        | {<br/>"environment": "production",<br/>"team": "payments",<br/>"region": "eu-west-1"<br/>} |
| `ledgerName`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Name of the ledger                                                         |                                                                            |