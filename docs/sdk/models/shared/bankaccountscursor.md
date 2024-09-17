# BankAccountsCursor

## Example Usage

```typescript
import { BankAccountsCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccountsCursor = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        country: "Kyrgyz Republic",
        createdAt: new Date("2024-04-09T07:01:09.697Z"),
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