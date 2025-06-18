# V2TransactionsCursorResponse

## Example Usage

```typescript
import { V2TransactionsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2TransactionsCursorResponse = {
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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                      | [shared.V2TransactionsCursorResponseCursor](../../../sdk/models/shared/v2transactionscursorresponsecursor.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |