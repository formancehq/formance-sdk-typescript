# PoolBalances

Aggregated balances across a pool's accounts

## Example Usage

```typescript
import { PoolBalances } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolBalances = {
  balances: [],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `balances`                                                            | [payments.PoolBalance](../../../sdk/models/payments/poolbalance.md)[] | :heavy_check_mark:                                                    | Aggregated balance per asset across the pool's accounts               |