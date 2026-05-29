# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-06-28T01:10:46.423Z"),
        id: "547d3f30-b54f-4b7e-af88-9d5b3570f784",
        ledger: "<value>",
        metadata: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
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

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [orchestration.ListWalletsResponseCursor](../../../sdk/models/orchestration/listwalletsresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |