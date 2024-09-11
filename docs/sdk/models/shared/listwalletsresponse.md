# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-11-13T07:16:15.502Z"),
        id: "c5fde10a-0ce2-4169-a510-019c6dc5e347",
        ledger: "<value>",
        metadata: {
          "key": "<value>",
        },
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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `cursor`                                                                                    | [shared.ListWalletsResponseCursor](../../../sdk/models/shared/listwalletsresponsecursor.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |