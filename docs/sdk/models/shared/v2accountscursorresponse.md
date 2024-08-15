# V2AccountsCursorResponse

## Example Usage

```typescript
import { V2AccountsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2AccountsCursorResponse = {
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
| `cursor`                                                                                              | [shared.V2AccountsCursorResponseCursor](../../../sdk/models/shared/v2accountscursorresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |