# V2InsertSchemaRequest

## Example Usage

```typescript
import { V2InsertSchemaRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2InsertSchemaRequest = {
  v2SchemaData: {
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
  },
  ledger: "ledger001",
  version: "v1.0.0",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `idempotencyKey`                                                    | *string*                                                            | :heavy_minus_sign:                                                  | Use an idempotency key                                              |                                                                     |
| `v2SchemaData`                                                      | [ledger.V2SchemaData2](../../../sdk/models/ledger/v2schemadata2.md) | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `ledger`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Name of the ledger.                                                 | ledger001                                                           |
| `version`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Schema version.                                                     | v1.0.0                                                              |