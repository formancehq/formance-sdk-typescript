# V2SchemaData

Schema data structure for ledger schemas

## Example Usage

```typescript
import { V2SchemaData } from "@formance/formance-sdk/sdk/models/ledger";

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
| `chart`                                                                                             | Record<string, [ledger.V2ChartSegment](../../../sdk/models/ledger/v2chartsegment.md)>               | :heavy_check_mark:                                                                                  | Chart of account                                                                                    | {<br/>"users": {<br/>"$userID": {<br/>".pattern": "^[0-9]{16}$"<br/>}<br/>}<br/>}                   |
| `queries`                                                                                           | Record<string, [ledger.V2QueryTemplate](../../../sdk/models/ledger/v2querytemplate.md)>             | :heavy_minus_sign:                                                                                  | Query templates                                                                                     |                                                                                                     |
| `transactions`                                                                                      | Record<string, [ledger.V2TransactionTemplate](../../../sdk/models/ledger/v2transactiontemplate.md)> | :heavy_minus_sign:                                                                                  | Transaction templates                                                                               |                                                                                                     |