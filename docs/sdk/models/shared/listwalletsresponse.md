# ListWalletsResponse

## Example Usage

```typescript
import { ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2022-03-31T12:16:51.444Z"),
        id: "75c6e3e9-184b-4a16-9e6b-1d8f8cfb9506",
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