# PoolBalancesLatestResponse

OK

## Example Usage

```typescript
import { PoolBalancesLatestResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolBalancesLatestResponse = {
  data: [
    {
      amount: 100n,
      asset: "USD",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [payments.PoolBalance](../../../sdk/models/payments/poolbalance.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |