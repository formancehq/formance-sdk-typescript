# V2LedgerInfo

Runtime information about a ledger, including the state of its storage migrations

## Example Usage

```typescript
import { V2LedgerInfo } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LedgerInfo = {
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | Name of the ledger                                                                   | ledger001                                                                            |
| `storage`                                                                            | [ledger.V2LedgerInfoStorage](../../../sdk/models/ledger/v2ledgerinfostorage.md)      | :heavy_minus_sign:                                                                   | Storage backend information, including the migrations applied to the ledger's bucket |                                                                                      |