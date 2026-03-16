# V2SchemasCursorResponse

## Example Usage

```typescript
import { V2SchemasCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2SchemasCursorResponse = {
  cursor: {
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
    pageSize: 754449,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `cursor`                                                                | [shared.V2SchemasCursor](../../../sdk/models/shared/v2schemascursor.md) | :heavy_check_mark:                                                      | N/A                                                                     |