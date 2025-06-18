# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponse = {
  cursor: {
    data: [
      {
        asset: "<value>",
        description: "dream finally developmental",
        id: "478db7c9-0d9d-4305-8146-2316ac01b272",
        metadata: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
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