# V2SchemasCursor

## Example Usage

```typescript
import { V2SchemasCursor } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2SchemasCursor = {
  data: [
    {
      v2ChartOfAccounts: {
        "users": {
          additionalProperties: {
            "$userID": {
              dotPattern: "^[0-9]{16}$",
            },
          },
        },
      },
      v2QueryTemplates: {
        "key": {
          v2QueryParams: {
            cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
            pageSize: 100,
            sort: "id:desc",
          },
        },
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [ledger.V2SchemaData1](../../../sdk/models/ledger/v2schemadata1.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `hasMore`                                                             | *boolean*                                                             | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `next`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=                                      |
| `pageSize`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `previous`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                          |