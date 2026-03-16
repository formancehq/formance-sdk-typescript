# V2SchemasCursor

## Example Usage

```typescript
import { V2SchemasCursor } from "@formance/formance-sdk/sdk/models/shared";

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
            cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
            pageSize: 100,
            sort: "id:desc",
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
| `data`                                                      | [shared.V2Schema](../../../sdk/models/shared/v2schema.md)[] | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `hasMore`                                                   | *boolean*                                                   | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `next`                                                      | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=                            |
| `pageSize`                                                  | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `previous`                                                  | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                |