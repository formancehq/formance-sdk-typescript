# V2ListWalletsResponse

## Example Usage

```typescript
import { V2ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-01-08T03:36:17.981Z"),
        id: "b8845f05-97a6-40ff-aa54-a31e94764a3e",
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