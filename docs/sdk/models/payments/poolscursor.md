# PoolsCursor

OK

## Example Usage

```typescript
import { PoolsCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolsCursor = {
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

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `cursorBase`                                                                            | [payments.PoolsCursorCursorBase](../../../sdk/models/payments/poolscursorcursorbase.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |