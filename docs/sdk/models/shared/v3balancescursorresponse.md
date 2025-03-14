# V3BalancesCursorResponse

## Example Usage

```typescript
import { V3BalancesCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3BalancesCursorResponse = {
  cursor: {
    data: [
      {
        accountID: "<id>",
        asset: "<value>",
        balance: BigInt("52819"),
        createdAt: new Date("2023-01-01T01:54:20.575Z"),
        lastUpdatedAt: new Date("2025-08-22T19:59:17.126Z"),
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                              | [shared.V3BalancesCursorResponseCursor](../../../sdk/models/shared/v3balancescursorresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |