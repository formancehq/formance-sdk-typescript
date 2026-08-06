# V2SchemaResponse

## Example Usage

```typescript
import { V2SchemaResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2SchemaResponse = {
  data: {
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
| `data`                                                    | [ledger.V2Schema](../../../sdk/models/ledger/v2schema.md) | :heavy_check_mark:                                        | Complete schema structure with metadata                   |