# V3PoolsCursorResponse

## Example Usage

```typescript
import { V3PoolsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PoolsCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-01-22T17:52:21.884Z"),
        id: "<id>",
        name: "<value>",
        poolAccounts: [
          "<value 1>",
          "<value 2>",
        ],
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `cursor`                                                                                        | [shared.V3PoolsCursorResponseCursor](../../../sdk/models/shared/v3poolscursorresponsecursor.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |