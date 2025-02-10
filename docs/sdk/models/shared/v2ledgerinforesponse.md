# V2LedgerInfoResponse

## Example Usage

```typescript
import { V2LedgerInfoResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LedgerInfoResponse = {
  data: {
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
| `data`                                                            | [shared.V2LedgerInfo](../../../sdk/models/shared/v2ledgerinfo.md) | :heavy_minus_sign:                                                | N/A                                                               |