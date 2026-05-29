# LedgerInfo

## Example Usage

```typescript
import { LedgerInfo } from "@formance/formance-sdk/sdk/models/ledger";

let value: LedgerInfo = {
  name: "ledger001",
  storage: {
    migrations: [
      {
        name: "migrations:001",
        version: "11",
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         | ledger001                                                                   |
| `storage`                                                                   | [ledger.LedgerInfoStorage](../../../sdk/models/ledger/ledgerinfostorage.md) | :heavy_minus_sign:                                                          | N/A                                                                         |                                                                             |