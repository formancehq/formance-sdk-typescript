# V2LedgerInfoStorage

## Example Usage

```typescript
import { V2LedgerInfoStorage } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LedgerInfoStorage = {
  migrations: [
    {
      name: "migrations:001",
      version: "11",
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `migrations`                                                              | [ledger.V2MigrationInfo](../../../sdk/models/ledger/v2migrationinfo.md)[] | :heavy_minus_sign:                                                        | N/A                                                                       |