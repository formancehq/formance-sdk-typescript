# V2ListWalletsResponse

## Example Usage

```typescript
import { V2ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2022-04-22T19:31:18.310Z"),
        id: "cbe31b32-5d80-47a8-a93d-8bf6e0094345",
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `cursor`                                                                                        | [shared.V2ListWalletsResponseCursor](../../../sdk/models/shared/v2listwalletsresponsecursor.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |