# PoolRequest

Query and dynamic pools are available from Connectivity v3.1

## Example Usage

```typescript
import { PoolRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountIDs`                                                                                                                                                      | *string*[]                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                | Accounts to place in the pool. Omit when the pool is driven by a query                                                                                            |
| `name`                                                                                                                                                            | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | Human-readable name for the pool                                                                                                                                  |
| `query`                                                                                                                                                           | Record<string, *any*>                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                | The same query as in ListAccount. Allowed properties are id, reference, connector_id, type, default_asset, name, psu_id, open_banking_connection_id and metadata. |