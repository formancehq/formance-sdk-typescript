# BalancesCursorResponse

## Example Usage

```typescript
import { BalancesCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: BalancesCursorResponse = {
    cursor: {
        data: [
            {
                account1: {
                    USD: 100,
                    EUR: 23,
                },
                account2: {
                    CAD: 20,
                    JPY: 21,
                },
            },
        ],
        hasMore: false,
        next: "",
        pageSize: 15,
        previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | [shared.BalancesCursorResponseCursor](../../../sdk/models/shared/balancescursorresponsecursor.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |