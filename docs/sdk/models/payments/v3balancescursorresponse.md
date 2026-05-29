# V3BalancesCursorResponse

## Example Usage

```typescript
import { V3BalancesCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3BalancesCursorResponse = {
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
| `cursor`                                                                                                  | [payments.V3BalancesCursorResponseCursor](../../../sdk/models/payments/v3balancescursorresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |