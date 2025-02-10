# LedgerInfoResponse

## Example Usage

```typescript
import { LedgerInfoResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: LedgerInfoResponse = {
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

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.LedgerInfo](../../../sdk/models/shared/ledgerinfo.md) | :heavy_minus_sign:                                            | N/A                                                           |