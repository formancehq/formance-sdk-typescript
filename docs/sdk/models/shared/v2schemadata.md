# V2SchemaData

Schema data structure for ledger schemas

## Example Usage

```typescript
import { V2SchemaData } from "@formance/formance-sdk/sdk/models/shared";

let value: V2SchemaData = {
  chart: {
    "users": {
      additionalProperties: {
        "$userID": {
          dotPattern: "^[0-9]{16}$",
        },
      },
    },
  },
  queries: {
    "key": {
      params: {
        cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
        pageSize: 100,
        sort: "id:desc",
      },
    },
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `chart`                                                                                             | Record<string, [shared.V2ChartSegment](../../../sdk/models/shared/v2chartsegment.md)>               | :heavy_check_mark:                                                                                  | Chart of account                                                                                    | {<br/>"users": {<br/>"$userID": {<br/>".pattern": "^[0-9]{16}$"<br/>}<br/>}<br/>}                   |
| `queries`                                                                                           | Record<string, [shared.V2QueryTemplate](../../../sdk/models/shared/v2querytemplate.md)>             | :heavy_minus_sign:                                                                                  | Query templates                                                                                     |                                                                                                     |
| `transactions`                                                                                      | Record<string, [shared.V2TransactionTemplate](../../../sdk/models/shared/v2transactiontemplate.md)> | :heavy_minus_sign:                                                                                  | Transaction templates                                                                               |                                                                                                     |