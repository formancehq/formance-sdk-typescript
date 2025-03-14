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
        balance: BigInt("880322"),
        createdAt: new Date("2024-03-31T11:38:42.791Z"),
        lastUpdatedAt: new Date("2025-09-21T12:46:13.410Z"),
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