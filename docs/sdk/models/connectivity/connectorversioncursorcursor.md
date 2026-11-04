# ConnectorVersionCursorCursor

## Example Usage

```typescript
import { ConnectorVersionCursorCursor } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectorVersionCursorCursor = {
  data: [],
  hasMore: false,
  pageSize: 479093,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [connectivity.ConnectorVersionSummary](../../../sdk/models/connectivity/connectorversionsummary.md)[] | :heavy_check_mark:                                                                                    | Versions sorted ascending by semantic version                                                         |
| `hasMore`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `next`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Cursor of the next page; absent on the last page                                                      |
| `pageSize`                                                                                            | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |