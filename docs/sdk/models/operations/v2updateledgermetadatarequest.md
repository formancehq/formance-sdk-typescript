# V2UpdateLedgerMetadataRequest

## Example Usage

```typescript
import { V2UpdateLedgerMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2UpdateLedgerMetadataRequest = {
  requestBody: {
    "admin": "true",
  },
  ledger: "ledger001",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `requestBody`            | Record<string, *string*> | :heavy_minus_sign:       | N/A                      | {<br/>"admin": "true"<br/>} |
| `ledger`                 | *string*                 | :heavy_check_mark:       | Name of the ledger.      | ledger001                |