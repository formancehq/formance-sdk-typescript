# V2GetLedgerResponse

## Example Usage

```typescript
import { V2GetLedgerResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2GetLedgerResponse = {
  v2Ledger: {
    v2Metadata: {
      "admin": "true",
    },
    addedAt: new Date("2024-03-07T06:18:27.028Z"),
    bucket: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `v2Ledger`                                                | [ledger.V2Ledger](../../../sdk/models/ledger/v2ledger.md) | :heavy_check_mark:                                        | N/A                                                       |