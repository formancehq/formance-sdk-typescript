# PoolBalances

## Example Usage

```typescript
import { PoolBalances } from "@formance/formance-sdk/sdk/models/shared";

let value: PoolBalances = {
  balances: [
    {
      amount: BigInt("100"),
      asset: "USD",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `balances`                                                        | [shared.PoolBalance](../../../sdk/models/shared/poolbalance.md)[] | :heavy_check_mark:                                                | N/A                                                               |