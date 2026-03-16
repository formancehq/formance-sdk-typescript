# V2Schema

Complete schema structure with metadata

## Example Usage

```typescript
import { V2Schema } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Schema = {
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
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `chart`                                                                                             | Record<string, [shared.V2ChartSegment](../../../sdk/models/shared/v2chartsegment.md)>               | :heavy_check_mark:                                                                                  | Chart of account                                                                                    | {<br/>"users": {<br/>"$userID": {<br/>".pattern": "^[0-9]{16}$"<br/>}<br/>}<br/>}                   |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | Schema creation timestamp                                                                           | 2023-01-01T00:00:00Z                                                                                |
| `queries`                                                                                           | Record<string, [shared.V2QueryTemplate](../../../sdk/models/shared/v2querytemplate.md)>             | :heavy_minus_sign:                                                                                  | Query templates                                                                                     |                                                                                                     |
| `transactions`                                                                                      | Record<string, [shared.V2TransactionTemplate](../../../sdk/models/shared/v2transactiontemplate.md)> | :heavy_minus_sign:                                                                                  | Transaction templates                                                                               |                                                                                                     |
| `version`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | Schema version                                                                                      | v1.0.0                                                                                              |