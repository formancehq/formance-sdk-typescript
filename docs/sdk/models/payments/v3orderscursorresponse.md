# V3OrdersCursorResponse

## Example Usage

```typescript
import { V3OrdersCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3OrdersCursorResponse = {
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                              | [payments.V3OrdersCursorResponseCursor](../../../sdk/models/payments/v3orderscursorresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |