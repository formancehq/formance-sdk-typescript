# StripeConfig

## Example Usage

```typescript
import { StripeConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: StripeConfig = {
  apiKey: "XXX",
  name: "My Stripe Account",
  pageSize: 50,
  pollingPeriod: "120m",
  provider: "Stripe",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | API key issued by Stripe, used to authenticate the connector's requests                                 | XXX                                                                                                     |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Human-readable name identifying this connector instance                                                 | My Stripe Account                                                                                       |
| `pageSize`                                                                                              | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Number of BalanceTransaction to fetch at each polling interval.<br/>                                    | 50                                                                                                      |
| `pollingPeriod`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The frequency at which the connector will try to fetch new BalanceTransaction objects from Stripe API.<br/> | 120m                                                                                                    |
| `provider`                                                                                              | *"Stripe"*                                                                                              | :heavy_check_mark:                                                                                      | Identifies the payment provider this configuration targets                                              |                                                                                                         |