# V3Pool

A named group of accounts whose balances are aggregated together

## Example Usage

```typescript
import { V3Pool } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Pool = {
  createdAt: new Date("2025-07-30T19:16:55.222Z"),
  id: "<id>",
  name: "<value>",
  poolAccounts: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the pool was created                                                                     |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the pool                                                                 |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of the pool                                                               |
| `poolAccounts`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Accounts currently in the pool                                                                |
| `query`                                                                                       | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Filter selecting the accounts a dynamic pool contains                                         |
| `type`                                                                                        | [payments.V3PoolTypeEnum](../../../sdk/models/payments/v3pooltypeenum.md)                     | :heavy_minus_sign:                                                                            | Whether a pool holds a fixed account list or is driven by a query                             |