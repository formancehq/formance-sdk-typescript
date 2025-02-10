# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-06-27T10:37:27.899Z"),
        id: "04b9db09-75fa-4481-8b52-20cb746e1038",
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