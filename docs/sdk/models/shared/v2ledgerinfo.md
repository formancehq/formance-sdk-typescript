# V2LedgerInfo

## Example Usage

```typescript
import { V2LedgerInfo } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LedgerInfo = {
    name: "ledger001",
    storage: {
        migrations: [
            {
                name: "migrations:001",
                version: 11,
            },
        ],
    },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | ledger001                                                                       |
| `storage`                                                                       | [shared.V2LedgerInfoStorage](../../../sdk/models/shared/v2ledgerinfostorage.md) | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |