# BankAccountsCursor

## Example Usage

```typescript
import { BankAccountsCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccountsCursor = {
    cursor: {
        data: [
            {
                connectorID: "<value>",
                country: "Kenya",
                createdAt: new Date("2024-07-25T02:38:16.388Z"),
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