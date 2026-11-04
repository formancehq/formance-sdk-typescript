# DropIndexRequest

## Example Usage

```typescript
import { DropIndexRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: DropIndexRequest = {
  canonicalId: "<id>",
  ledgerName: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `idempotencyKey`                      | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `canonicalId`                         | *string*                              | :heavy_check_mark:                    | Canonical form of the target IndexID. |
| `ledgerName`                          | *string*                              | :heavy_check_mark:                    | Name of the ledger                    |