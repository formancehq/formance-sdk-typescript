# AccountsCursorResponse

## Example Usage

```typescript
import { AccountsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountsCursorResponse = {
  cursor: {
    data: [
      {
        address: "users:001",
        metadata: {
          "admin": true,
          "a": {
            "nested": {
              "key": "value",
            },
          },
        },
        type: "virtual",
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

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `cursor`                                              | [shared.Cursor](../../../sdk/models/shared/cursor.md) | :heavy_check_mark:                                    | N/A                                                   |