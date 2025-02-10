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
        balance: BigInt("437785"),
        createdAt: new Date("2025-07-20T00:51:35.962Z"),
        lastUpdatedAt: new Date("2024-10-16T02:16:48.985Z"),
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