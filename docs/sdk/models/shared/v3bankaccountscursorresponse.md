# V3BankAccountsCursorResponse

## Example Usage

```typescript
import { V3BankAccountsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3BankAccountsCursorResponse = {
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
| `cursor`                                                                                                      | [shared.V3BankAccountsCursorResponseCursor](../../../sdk/models/shared/v3bankaccountscursorresponsecursor.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |