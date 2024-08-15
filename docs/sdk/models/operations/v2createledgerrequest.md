# V2CreateLedgerRequest

## Example Usage

```typescript
import { V2CreateLedgerRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreateLedgerRequest = {
    v2CreateLedgerRequest: {
        metadata: {
            admin: "true",
        },
    },
    ledger: "ledger001",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `v2CreateLedgerRequest`                                                             | [shared.V2CreateLedgerRequest](../../../sdk/models/shared/v2createledgerrequest.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |
| `ledger`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | Name of the ledger.                                                                 | ledger001                                                                           |