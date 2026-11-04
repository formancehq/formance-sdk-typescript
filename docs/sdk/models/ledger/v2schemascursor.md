# V2SchemasCursor

Paginated cursor over the ledger's schemas

## Example Usage

```typescript
import { V2SchemasCursor } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2SchemasCursor = {
  data: [
    {
      chart: {
        "users": {
          additionalProperties: {
            "$userID": {
              dotPattern: "^[0-9]{16}$",
            },
          },
        },
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      queries: {
        "key": {
          params: {
            resource: "transactions",
          },
        },
      },
      version: "v1.0.0",
    },
  ],
  hasMore: false,
  next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
  pageSize: 300850,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [ledger.V2Schema](../../../sdk/models/ledger/v2schema.md)[] | :heavy_check_mark:                                          | The schemas on this page                                    |                                                             |
| `hasMore`                                                   | *boolean*                                                   | :heavy_check_mark:                                          | Whether further pages are available                         |                                                             |
| `next`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Cursor for the next page, absent on the last page           | aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=                            |
| `pageSize`                                                  | *number*                                                    | :heavy_check_mark:                                          | Number of items requested per page                          |                                                             |
| `previous`                                                  | *string*                                                    | :heavy_minus_sign:                                          | Cursor for the previous page, absent on the first page      | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                |