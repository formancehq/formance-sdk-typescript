# TransactionsCursorResponse

## Example Usage

```typescript
import { TransactionsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TransactionsCursorResponse = {
    cursor: {
        data: [],
        hasMore: false,
        next: "",
        pageSize: 15,
        previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [shared.TransactionsCursorResponseCursor](../../../sdk/models/shared/transactionscursorresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |