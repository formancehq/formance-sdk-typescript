# V2CreateLedgerRequest

## Example Usage

```typescript
import { V2CreateLedgerRequest } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2CreateLedgerRequest = {
  metadata: {
    "admin": "true",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `bucket`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Name of the storage bucket backing the ledger. Ledgers sharing a bucket share a database schema |                                                                                                 |
| `features`                                                                                      | Record<string, *string*>                                                                        | :heavy_minus_sign:                                                                              | Feature flags to enable on the ledger, keyed by feature name                                    |                                                                                                 |
| `metadata`                                                                                      | Record<string, *string*>                                                                        | :heavy_minus_sign:                                                                              | Arbitrary key/value pairs attached to the resource                                              | {<br/>"admin": "true"<br/>}                                                                     |