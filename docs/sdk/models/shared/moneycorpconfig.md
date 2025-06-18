# MoneycorpConfig

## Example Usage

```typescript
import { MoneycorpConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: MoneycorpConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My Moneycorp Account",
  pollingPeriod: "60s",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | XXX                                                                                                        |
| `clientID`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | XXX                                                                                                        |
| `endpoint`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | XXX                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | My Moneycorp Account                                                                                       |
| `pollingPeriod`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The frequency at which the connector will try to fetch new BalanceTransaction objects from MoneyCorp API.<br/> | 60s                                                                                                        |
| `provider`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |