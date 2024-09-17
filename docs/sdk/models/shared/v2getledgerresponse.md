# V2GetLedgerResponse

## Example Usage

```typescript
import { V2GetLedgerResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetLedgerResponse = {
  data: {
    addedAt: new Date("2024-06-25T05:59:53.341Z"),
    bucket: "<value>",
    metadata: {
      "admin": "true",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [shared.V2Ledger](../../../sdk/models/shared/v2ledger.md) | :heavy_check_mark:                                        | N/A                                                       |