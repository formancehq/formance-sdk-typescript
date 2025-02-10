# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponse = {
  cursor: {
    data: [
      {
        description:
          "whenever oh whisper reluctantly why unethically yum advancement pecan",
        id: "7060fc53-655e-46b2-a879-ad3609e6f938",
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