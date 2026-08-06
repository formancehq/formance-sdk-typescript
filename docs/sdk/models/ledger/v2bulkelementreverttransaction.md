# V2BulkElementRevertTransaction

## Example Usage

```typescript
import { V2BulkElementRevertTransaction } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementRevertTransaction = {
  action: "REVERT_TRANSACTION",
  data: {
    id: 206224n,
    metadata: {
      "admin": "true",
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                      | *"REVERT_TRANSACTION"*                                                                                        | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `data`                                                                                                        | [ledger.V2BulkElementRevertTransactionData](../../../sdk/models/ledger/v2bulkelementreverttransactiondata.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `ik`                                                                                                          | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |