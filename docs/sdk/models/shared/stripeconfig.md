# StripeConfig

## Example Usage

```typescript
import { StripeConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: StripeConfig = {
  apiKey: "XXX",
  name: "My Stripe Account",
  pageSize: 50,
  pollingPeriod: "60s",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | XXX                                                                                                     |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | My Stripe Account                                                                                       |
| `pageSize`                                                                                              | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Number of BalanceTransaction to fetch at each polling interval.<br/>                                    | 50                                                                                                      |
| `pollingPeriod`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.<br/> | 60s                                                                                                     |
| `provider`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |