# BalancesCursor

OK

## Example Usage

```typescript
import { BalancesCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: BalancesCursor = {
  cursorBase: {
    data: [],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursorBase`                                                                                  | [payments.BalancesCursorCursorBase](../../../sdk/models/payments/balancescursorcursorbase.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |