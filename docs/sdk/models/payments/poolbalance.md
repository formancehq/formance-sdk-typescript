# PoolBalance

## Example Usage

```typescript
import { PoolBalance } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolBalance = {
  amount: 100n,
  asset: "USD",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `amount`                                                                | *BigInt*                                                                | :heavy_check_mark:                                                      | Total held across the pool for this asset, in the asset's smallest unit | 100                                                                     |
| `asset`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | Asset the balance is denominated in                                     | USD                                                                     |
| `relatedAccounts`                                                       | *string*[]                                                              | :heavy_minus_sign:                                                      | Accounts contributing to this balance                                   |                                                                         |