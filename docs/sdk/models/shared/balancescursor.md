# BalancesCursor

OK

## Example Usage

```typescript
import { BalancesCursor } from "@formance/formance-sdk/sdk/models/shared";

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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `cursor`                                                                          | [shared.BalancesCursorCursor](../../../sdk/models/shared/balancescursorcursor.md) | :heavy_check_mark:                                                                | N/A                                                                               |