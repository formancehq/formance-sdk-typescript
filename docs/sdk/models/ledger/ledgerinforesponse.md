# LedgerInfoResponse

## Example Usage

```typescript
import { LedgerInfoResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: LedgerInfoResponse = {
  ledgerInfo: {
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

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `ledgerInfo`                                                  | [ledger.LedgerInfo](../../../sdk/models/ledger/ledgerinfo.md) | :heavy_minus_sign:                                            | N/A                                                           |