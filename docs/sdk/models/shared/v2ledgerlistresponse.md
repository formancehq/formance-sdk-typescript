# V2LedgerListResponse

## Example Usage

```typescript
import { V2LedgerListResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LedgerListResponse = {
  cursor: {
    data: [
      {
        addedAt: new Date("2024-04-05T13:13:41.181Z"),
        bucket: "<value>",
        metadata: {
          "admin": "true",
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | [shared.V2LedgerListResponseCursor](../../../sdk/models/shared/v2ledgerlistresponsecursor.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |