# V3AccountsCursorResponse

## Example Usage

```typescript
import { V3AccountsCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3AccountsCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [payments.V3AccountsCursorResponseCursor](../../../sdk/models/payments/v3accountscursorresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |