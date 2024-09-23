# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponse = {
  cursor: {
    data: [
      {
        description: "Fully-configurable coherent superstructure",
        id: "d75f3803-9a9d-4fc7-bd1a-82f59e81d5fe",
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