# V2ListWalletsResponse

## Example Usage

```typescript
import { V2ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2023-04-15T12:04:06.271Z"),
        id: "e1fe17bb-ec47-4b23-b74d-95dcfd62d05e",
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