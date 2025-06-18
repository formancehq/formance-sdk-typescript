# PoliciesCursorResponseCursor

## Example Usage

```typescript
import { PoliciesCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: PoliciesCursorResponseCursor = {
  data: [
    {
      createdAt: new Date("2021-01-01T00:00:00.000Z"),
      id: "XXX",
      ledgerName: "default",
      ledgerQuery: {
        "key": "<value>",
        "key1": "<value>",
      },
      name: "XXX",
      paymentsPoolID: "XXX",
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Policy](../../../sdk/models/shared/policy.md)[] | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `hasMore`                                               | *boolean*                                               | :heavy_check_mark:                                      | N/A                                                     | false                                                   |
| `next`                                                  | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `pageSize`                                              | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 15                                                      |
| `previous`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=            |