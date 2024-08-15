# Storage

## Example Usage

```typescript
import { Storage } from "@formance/formance-sdk/sdk/models/shared";

let value: Storage = {
    migrations: [
        {
            name: "migrations:001",
            version: 11,
        },
    ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `migrations`                                                          | [shared.MigrationInfo](../../../sdk/models/shared/migrationinfo.md)[] | :heavy_minus_sign:                                                    | N/A                                                                   |