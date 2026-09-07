# V3PoolBalance

## Example Usage

```typescript
import { V3PoolBalance } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PoolBalance = {
  amount: 264141n,
  asset: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `amount`                                                                | *BigInt*                                                                | :heavy_check_mark:                                                      | Total held across the pool for this asset, in the asset's smallest unit |
| `asset`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | Asset the balance is denominated in                                     |
| `relatedAccounts`                                                       | *string*[]                                                              | :heavy_minus_sign:                                                      | Accounts contributing to this balance                                   |