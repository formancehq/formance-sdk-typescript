# BalancesCursor

## Example Usage

```typescript
import { BalancesCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BalancesCursor = {
    cursor: {
        data: [
            {
                accountId: "<value>",
                asset: "<value>",
                balance: BigInt("205566"),
                createdAt: new Date("2024-05-02T21:01:32.215Z"),
                currency: "Pataca",
                lastUpdatedAt: new Date("2024-07-14T06:45:23.165Z"),
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `cursor`                                                                          | [shared.BalancesCursorCursor](../../../sdk/models/shared/balancescursorcursor.md) | :heavy_check_mark:                                                                | N/A                                                                               |