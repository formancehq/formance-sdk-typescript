# Query

## Example Usage

```typescript
import { Query } from "@formance/formance-sdk/sdk/models/shared";

let value: Query = {
    after: ["users:002"],
    cursor: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    ledgers: ["quickstart"],
    policy: "OR",
    raw: {},
    sort: "id:asc",
    terms: ["destination=central_bank1"],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `after`                                                   | *string*[]                                                | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `cursor`                                                  | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=              |
| `ledgers`                                                 | *string*[]                                                | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `pageSize`                                                | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `policy`                                                  | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | OR                                                        |
| `raw`                                                     | [shared.QueryRaw](../../../sdk/models/shared/queryraw.md) | :heavy_minus_sign:                                        | N/A                                                       | {<br/>"query": {<br/>"match_all": {}<br/>}<br/>}          |
| `sort`                                                    | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | id:asc                                                    |
| `target`                                                  | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `terms`                                                   | *string*[]                                                | :heavy_minus_sign:                                        | N/A                                                       |                                                           |