# PoolBalancesResponse

## Example Usage

```typescript
import { PoolBalancesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: PoolBalancesResponse = {
    data: {
        balances: [
            {
                amount: BigInt("100"),
                asset: "USD",
            },
        ],
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.PoolBalances](../../../sdk/models/shared/poolbalances.md) | :heavy_check_mark:                                                | N/A                                                               |