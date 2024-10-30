# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponse = {
  cursor: {
    data: [
      {
        description: "huzzah crazy between um atop",
        id: "2e5766ce-af39-4abc-b5e2-4794e71df589",
        metadata: {
          "key": "<value>",
        },
        walletID: "<id>",
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