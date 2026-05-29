# LedgerInfoStorage

## Example Usage

```typescript
import { LedgerInfoStorage } from "@formance/formance-sdk/sdk/models/ledger";

let value: LedgerInfoStorage = {
  migrations: [
    {
      name: "migrations:001",
      version: "11",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `migrations`                                                          | [ledger.MigrationInfo](../../../sdk/models/ledger/migrationinfo.md)[] | :heavy_minus_sign:                                                    | N/A                                                                   |