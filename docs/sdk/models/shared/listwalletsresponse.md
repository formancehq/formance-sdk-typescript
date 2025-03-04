# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-10-09T23:45:54.454Z"),
        id: "ad3609e6-f938-4aaa-b333-b7ac97682cec",
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