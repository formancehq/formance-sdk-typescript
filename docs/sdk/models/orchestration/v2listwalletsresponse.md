# V2ListWalletsResponse

## Example Usage

```typescript
import { V2ListWalletsResponse } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ListWalletsResponse = {
  v2Cursor: {
    data: [
      {
        createdAt: new Date("2024-11-18T18:11:54.712Z"),
        id: "be6dedcb-1035-4cf1-9638-36083616f1c8",
        ledger: "<value>",
        metadata: {},
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

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `v2Cursor`                                                              | [orchestration.V2Cursor](../../../sdk/models/orchestration/v2cursor.md) | :heavy_check_mark:                                                      | N/A                                                                     |