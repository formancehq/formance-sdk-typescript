# V3ConnectorsCursorResponse

## Example Usage

```typescript
import { V3ConnectorsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ConnectorsCursorResponse = {
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
| `cursor`                                                                                                  | [shared.V3ConnectorsCursorResponseCursor](../../../sdk/models/shared/v3connectorscursorresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |