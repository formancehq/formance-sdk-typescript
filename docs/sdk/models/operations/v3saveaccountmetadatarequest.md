# V3SaveAccountMetadataRequest

## Example Usage

```typescript
import { V3SaveAccountMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3SaveAccountMetadataRequest = {
  requestBody: {
    "account_type": "asset",
    "label": "Bank Account",
    "active": true,
    "balance_threshold": 1000,
  },
  address: "users:001",
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                            | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Idempotency key for the request                                                                                                             |                                                                                                                                             |
| `requestBody`                                                                                                                               | Record<string, *ledgerV3.MetadataValue*>                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         | {<br/>"account_type": "asset",<br/>"label": "Bank Account",<br/>"active": true,<br/>"balance_threshold": 1000<br/>}                         |
| `address`                                                                                                                                   | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Raw account address, for example users:001. Direct HTTP clients may<br/>URL-encode it as one path segment (users%3A001). Decoded exactly once.<br/> | users:001                                                                                                                                   |
| `ledgerName`                                                                                                                                | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Name of the ledger                                                                                                                          |                                                                                                                                             |