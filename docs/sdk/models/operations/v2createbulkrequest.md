# V2CreateBulkRequest

## Example Usage

```typescript
import { V2CreateBulkRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreateBulkRequest = {
    requestBody: [],
    ledger: "ledger001",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `requestBody`            | *shared.V2BulkElement*[] | :heavy_minus_sign:       | N/A                      |                          |
| `ledger`                 | *string*                 | :heavy_check_mark:       | Name of the ledger.      | ledger001                |