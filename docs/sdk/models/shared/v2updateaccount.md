# V2UpdateAccount

## Example Usage

```typescript
import { V2UpdateAccount } from "@formance/formance-sdk/sdk/models/shared";

let value: V2UpdateAccount = {
  id: "<id>",
  ledger: "<value>",
  metadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `ledger`                 | *string*                 | :heavy_check_mark:       | N/A                      |
| `metadata`               | Record<string, *string*> | :heavy_check_mark:       | N/A                      |