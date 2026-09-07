# Pool

A named group of accounts whose balances are aggregated together

## Example Usage

```typescript
import { Pool } from "@formance/formance-sdk/sdk/models/payments";

let value: Pool = {
  accounts: [
    "<value 1>",
    "<value 2>",
  ],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accounts`                                                            | *string*[]                                                            | :heavy_check_mark:                                                    | Accounts currently in the pool                                        |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier of the pool                                         |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | Human-readable name of the pool                                       |
| `query`                                                               | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | Filter selecting the accounts a dynamic pool contains                 |
| `type`                                                                | [payments.PoolTypeEnum](../../../sdk/models/payments/pooltypeenum.md) | :heavy_minus_sign:                                                    | Whether a pool holds a fixed account list or is driven by a query     |