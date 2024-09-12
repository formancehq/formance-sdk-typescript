# V2LedgerInfoStorage

## Example Usage

```typescript
import { V2LedgerInfoStorage } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LedgerInfoStorage = {
  migrations: [
    {
      name: "migrations:001",
      version: 11,
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `migrations`                                                              | [shared.V2MigrationInfo](../../../sdk/models/shared/v2migrationinfo.md)[] | :heavy_minus_sign:                                                        | N/A                                                                       |