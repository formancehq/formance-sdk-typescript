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
        balance: BigInt("775959"),
        createdAt: new Date("2022-03-25T10:55:20.447Z"),
        currency: "Canadian Dollar",
        lastUpdatedAt: new Date("2023-12-30T22:18:25.349Z"),
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