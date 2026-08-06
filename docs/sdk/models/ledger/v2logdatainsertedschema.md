# V2LogDataInsertedSchema

Payload for INSERTED_SCHEMA log entries. Contains the schema that was inserted into the ledger.

## Example Usage

```typescript
import { V2LogDataInsertedSchema } from "@formance/formance-sdk/sdk/models/ledger";

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
          resource: "transactions",
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
| `schema`                                                  | [ledger.V2Schema](../../../sdk/models/ledger/v2schema.md) | :heavy_check_mark:                                        | Complete schema structure with metadata                   |