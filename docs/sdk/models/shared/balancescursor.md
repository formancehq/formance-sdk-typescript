# BalancesCursor

OK

## Example Usage

```typescript
import { BalancesCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BalancesCursor = {
  cursor: {
    data: [
      {
        accountId: "<id>",
        asset: "<value>",
        balance: BigInt("467109"),
        createdAt: new Date("2025-04-05T08:01:37.302Z"),
        currency: "UAE Dirham",
        lastUpdatedAt: new Date("2024-04-21T08:34:26.118Z"),
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