# PoolsCursor

OK

## Example Usage

```typescript
import { PoolsCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: PoolsCursor = {
  cursor: {
    data: [
      {
        accounts: [
          "<value>",
        ],
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

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | [shared.PoolsCursorCursor](../../../sdk/models/shared/poolscursorcursor.md) | :heavy_check_mark:                                                          | N/A                                                                         |