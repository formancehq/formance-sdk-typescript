# PoliciesCursorResponse

OK

## Example Usage

```typescript
import { PoliciesCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: PoliciesCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2021-01-01T00:00:00.000Z"),
        id: "XXX",
        ledgerName: "default",
        ledgerQuery: {
          "key": "<value>",
        },
        name: "XXX",
        paymentsPoolID: "XXX",
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

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | [shared.PoliciesCursorResponseCursor](../../../sdk/models/shared/policiescursorresponsecursor.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |