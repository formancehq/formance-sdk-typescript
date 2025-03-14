# BankAccountsCursor

OK

## Example Usage

```typescript
import { BankAccountsCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccountsCursor = {
  cursor: {
    data: [
      {
        country: "French Southern Territories",
        createdAt: new Date("2024-09-04T21:26:38.743Z"),
        id: "<id>",
        name: "<value>",
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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cursor`                                                                                  | [shared.BankAccountsCursorCursor](../../../sdk/models/shared/bankaccountscursorcursor.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |