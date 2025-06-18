# V3AccountsCursorResponse

## Example Usage

```typescript
import { V3AccountsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                              | [shared.V3AccountsCursorResponseCursor](../../../sdk/models/shared/v3accountscursorresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |