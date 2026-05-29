# V2LedgerInfoResponse

## Example Usage

```typescript
import { V2LedgerInfoResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LedgerInfoResponse = {
  v2LedgerInfo: {
    name: "ledger001",
    storage: {
      migrations: [
        {
          name: "migrations:001",
          version: "11",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `v2LedgerInfo`                                                    | [ledger.V2LedgerInfo](../../../sdk/models/ledger/v2ledgerinfo.md) | :heavy_minus_sign:                                                | N/A                                                               |