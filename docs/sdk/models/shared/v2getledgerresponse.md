# V2GetLedgerResponse

## Example Usage

```typescript
import { V2GetLedgerResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetLedgerResponse = {
  data: {
    addedAt: new Date("2023-11-08T18:38:53.264Z"),
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