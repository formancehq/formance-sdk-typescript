# V2CreateLedgerRequest

## Example Usage

```typescript
import { V2CreateLedgerRequest } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2CreateLedgerRequest = {
  v2Metadata: {
    "admin": "true",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `v2Metadata`             | Record<string, *string*> | :heavy_minus_sign:       | N/A                      | {<br/>"admin": "true"<br/>} |
| `bucket`                 | *string*                 | :heavy_minus_sign:       | N/A                      |                          |
| `features`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |                          |