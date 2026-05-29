# V3ConnectorSchedulesCursorResponseCursor

## Example Usage

```typescript
import { V3ConnectorSchedulesCursorResponseCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConnectorSchedulesCursorResponseCursor = {
  data: [],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [payments.V3Schedule](../../../sdk/models/payments/v3schedule.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `hasMore`                                                           | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 | false                                                               |
| `next`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |                                                                     |
| `pageSize`                                                          | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | 15                                                                  |
| `previous`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                        |