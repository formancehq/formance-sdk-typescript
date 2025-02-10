# V3PoolsCursorResponse

## Example Usage

```typescript
import { V3PoolsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PoolsCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-02-23T01:32:43.530Z"),
        id: "<id>",
        name: "<value>",
        poolAccounts: [
          "<value>",
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