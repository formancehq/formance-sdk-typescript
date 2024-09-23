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
        balance: BigInt("320748"),
        createdAt: new Date("2022-03-23T05:46:16.749Z"),
        currency: "Pa'anga",
        lastUpdatedAt: new Date("2024-04-25T16:14:24.819Z"),
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