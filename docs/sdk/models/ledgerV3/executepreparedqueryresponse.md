# ExecutePreparedQueryResponse

Result of executing a prepared query. Exactly one field is set,
discriminated by the request execution `mode` (see
`ExecutePreparedQueryRequest.mode`): `mode=LIST` returns `cursor`,
`mode=AGGREGATE_VOLUMES` returns `aggregateResult`. (The query `target`
— ACCOUNTS, TRANSACTIONS or LOGS — selects the row type inside the
cursor, not which envelope field is set: `accountData`,
`transactionData` or `logData` respectively. LOGS is a usable
prepared-query target: `query.Execute` hydrates `logData` for it.) Both
payloads use the same camelCase encoding as the equivalent non-prepared
endpoints
(header-negotiated monetary amounts, `color` always present on every volume row
including the uncolored bucket).


## Example Usage

```typescript
import { ExecutePreparedQueryResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: ExecutePreparedQueryResponse = {
  cursor: {
    logData: [
      {
        payload: {
          apply: {
            log: {
              data: {
                "targetType": "ACCOUNT",
                "targetId": "users:alice",
                "metadata": {
                  "category": "premium",
                },
              },
              type: "SET_METADATA",
            },
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregateResult`                                                                                                                                                                                                                                              | [ledgerV3.AggregateVolumesData](../../../sdk/models/ledgerV3/aggregatevolumesdata.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                            |
| `cursor`                                                                                                                                                                                                                                                       | [ledgerV3.Cursor](../../../sdk/models/ledgerV3/cursor.md)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                             | Paged cursor, returned when the request `mode` is `LIST`. The row<br/>type follows the query `target`: `accountData` for ACCOUNTS,<br/>`transactionData` for TRANSACTIONS, `logData` for LOGS. Rows use the<br/>same camelCase shapes as the non-prepared list endpoints.<br/> |