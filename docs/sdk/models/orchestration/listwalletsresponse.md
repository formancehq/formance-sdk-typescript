# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ListWalletsResponse = {
  cursor: {
    data: [],
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