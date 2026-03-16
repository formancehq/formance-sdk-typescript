# V2LogDataInsertedSchema

Payload for INSERTED_SCHEMA log entries. Contains the schema that was inserted into the ledger.

## Example Usage

```typescript
import { V2LogDataInsertedSchema } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogDataInsertedSchema = {
  schema: {
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
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `schema`                                                  | [shared.V2Schema](../../../sdk/models/shared/v2schema.md) | :heavy_check_mark:                                        | Complete schema structure with metadata                   |