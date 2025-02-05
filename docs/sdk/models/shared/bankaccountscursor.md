# BankAccountsCursor

OK

## Example Usage

```typescript
import { BankAccountsCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccountsCursor = {
  cursor: {
    data: [
      {
        connectorID: "<id>",
        country: "Malta",
        createdAt: new Date("2025-06-10T15:27:10.584Z"),
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