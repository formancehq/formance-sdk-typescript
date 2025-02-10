# V3PoolBalancesResponse

## Example Usage

```typescript
import { V3PoolBalancesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PoolBalancesResponse = {
  data: [
    {
      amount: BigInt("39029"),
      asset: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.V3PoolBalance](../../../sdk/models/shared/v3poolbalance.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |