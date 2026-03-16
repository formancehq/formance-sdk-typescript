# V2LogsCursorResponse

## Example Usage

```typescript
import { V2LogsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogsCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | [shared.V2LogsCursorResponseCursor](../../../sdk/models/shared/v2logscursorresponsecursor.md)     | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `resource`                                                                                        | [shared.V2LogsCursorResponseResource](../../../sdk/models/shared/v2logscursorresponseresource.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |