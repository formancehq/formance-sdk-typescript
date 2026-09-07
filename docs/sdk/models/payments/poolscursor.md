# PoolsCursor

OK

## Example Usage

```typescript
import { PoolsCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolsCursor = {
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

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `cursor`                                                                        | [payments.PoolsCursorCursor](../../../sdk/models/payments/poolscursorcursor.md) | :heavy_check_mark:                                                              | Paginated cursor wrapping the list of pools                                     |