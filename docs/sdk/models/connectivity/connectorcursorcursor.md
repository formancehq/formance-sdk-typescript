# ConnectorCursorCursor

## Example Usage

```typescript
import { ConnectorCursorCursor } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectorCursorCursor = {
  data: [],
  hasMore: true,
  pageSize: 18863,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [connectivity.Connector](../../../sdk/models/connectivity/connector.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |
| `hasMore`                                                                 | *boolean*                                                                 | :heavy_check_mark:                                                        | N/A                                                                       |
| `next`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | Cursor of the next page; absent on the last page                          |
| `pageSize`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |