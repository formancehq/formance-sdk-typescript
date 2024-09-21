# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponse = {
  cursor: {
    data: [
      {
        description: "Intuitive fresh-thinking architecture",
        id: "81e0742c-b2ac-4c1a-abd8-7fc85d717d70",
        metadata: {
          "key": "<value>",
        },
        walletID: "<value>",
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `cursor`                                                                              | [shared.GetHoldsResponseCursor](../../../sdk/models/shared/getholdsresponsecursor.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |