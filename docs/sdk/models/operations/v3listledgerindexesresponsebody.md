# V3ListLedgerIndexesResponseBody

Indexes retrieved successfully.

## Example Usage

```typescript
import { V3ListLedgerIndexesResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListLedgerIndexesResponseBody = {
  data: [
    {},
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `data`                  | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |