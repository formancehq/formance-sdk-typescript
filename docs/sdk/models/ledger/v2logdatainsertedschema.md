# V2LogDataInsertedSchema

Payload for INSERTED_SCHEMA log entries. Contains the schema that was inserted into the ledger.

## Example Usage

```typescript
import { V2LogDataInsertedSchema } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LogDataInsertedSchema = {
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
    createdAt: new Date("2023-01-01T00:00:00Z"),
    version: "v1.0.0",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `v2SchemaData`                                                      | [ledger.V2SchemaData1](../../../sdk/models/ledger/v2schemadata1.md) | :heavy_check_mark:                                                  | Complete schema structure with metadata                             |