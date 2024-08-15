# V2CreateLedgerRequest

## Example Usage

```typescript
import { V2CreateLedgerRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: V2CreateLedgerRequest = {
    metadata: {
        admin: "true",
    },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `bucket`                 | *string*                 | :heavy_minus_sign:       | N/A                      |                          |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      | {<br/>"admin": "true"<br/>} |