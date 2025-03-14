# V2ListWalletsResponse

## Example Usage

```typescript
import { V2ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-12-26T07:01:46.533Z"),
        id: "185f09b4-fde0-494d-8a81-8af9ffa87e01",
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