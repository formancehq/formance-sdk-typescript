# V2SchemasCursorResponse

## Example Usage

```typescript
import { V2SchemasCursorResponse } from "@formance/formance-sdk/sdk/models/ledger";

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
              resource: "transactions",
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
| `cursor`                                                                | [ledger.V2SchemasCursor](../../../sdk/models/ledger/v2schemascursor.md) | :heavy_check_mark:                                                      | N/A                                                                     |