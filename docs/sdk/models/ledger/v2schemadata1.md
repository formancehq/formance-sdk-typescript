# V2SchemaData1

Complete schema structure with metadata

## Example Usage

```typescript
import { V2SchemaData1 } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2SchemaData1 = {
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
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `v2ChartOfAccounts`                                                                                 | Record<string, [ledger.V2ChartSegment](../../../sdk/models/ledger/v2chartsegment.md)>               | :heavy_check_mark:                                                                                  | Chart of account                                                                                    | {<br/>"users": {<br/>"$userID": {<br/>".pattern": "^[0-9]{16}$"<br/>}<br/>}<br/>}                   |
| `v2QueryTemplates`                                                                                  | Record<string, [ledger.V2QueryTemplate](../../../sdk/models/ledger/v2querytemplate.md)>             | :heavy_minus_sign:                                                                                  | Query templates                                                                                     |                                                                                                     |
| `v2TransactionTemplates`                                                                            | Record<string, [ledger.V2TransactionTemplate](../../../sdk/models/ledger/v2transactiontemplate.md)> | :heavy_minus_sign:                                                                                  | Transaction templates                                                                               |                                                                                                     |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | Schema creation timestamp                                                                           | 2023-01-01T00:00:00Z                                                                                |
| `version`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | Schema version                                                                                      | v1.0.0                                                                                              |