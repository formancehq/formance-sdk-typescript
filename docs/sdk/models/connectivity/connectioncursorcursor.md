# ConnectionCursorCursor

## Example Usage

```typescript
import { ConnectionCursorCursor } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectionCursorCursor = {
  data: [
    {
      configuration: {},
      name: "<value>",
    },
  ],
  hasMore: false,
  pageSize: 89424,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [connectivity.Connection](../../../sdk/models/connectivity/connection.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |
| `hasMore`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `next`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Cursor of the next page; absent on the last page                            |
| `pageSize`                                                                  | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |