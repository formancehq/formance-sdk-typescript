# BalancesCursor

OK

## Example Usage

```typescript
import { BalancesCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: BalancesCursor = {
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `cursor`                                                                              | [payments.BalancesCursorCursor](../../../sdk/models/payments/balancescursorcursor.md) | :heavy_check_mark:                                                                    | Paginated cursor wrapping the list of balances                                        |