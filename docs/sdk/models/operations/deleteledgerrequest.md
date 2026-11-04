# DeleteLedgerRequest

## Example Usage

```typescript
import { DeleteLedgerRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: DeleteLedgerRequest = {
  ledgerName: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `idempotencyKey`                | *string*                        | :heavy_minus_sign:              | Idempotency key for the request |
| `ledgerName`                    | *string*                        | :heavy_check_mark:              | Name of the ledger              |