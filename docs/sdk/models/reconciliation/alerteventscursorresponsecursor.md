# AlertEventsCursorResponseCursor

## Example Usage

```typescript
import { AlertEventsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: AlertEventsCursorResponseCursor = {
  data: [],
  hasMore: true,
  pageSize: 444654,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [reconciliation.AlertEvent](../../../sdk/models/reconciliation/alertevent.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `next`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `pageSize`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `previous`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |