# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-07-16T16:23:37.743Z"),
        id: "0c7ac826-1bfc-4694-a84b-4fa10f353ea8",
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