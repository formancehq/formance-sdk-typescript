# MoneycorpConfig

## Example Usage

```typescript
import { MoneycorpConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: MoneycorpConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My Moneycorp Account",
  pollingPeriod: "120m",
  provider: "Moneycorp",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | API key issued by Moneycorp, used to authenticate the connector's requests                                 | XXX                                                                                                        |
| `clientID`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Client ID issued by Moneycorp                                                                              | XXX                                                                                                        |
| `endpoint`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Base URL of the Moneycorp API the connector calls                                                          | XXX                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Human-readable name identifying this connector instance                                                    | My Moneycorp Account                                                                                       |
| `pollingPeriod`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The frequency at which the connector will try to fetch new BalanceTransaction objects from MoneyCorp API.<br/> | 120m                                                                                                       |
| `provider`                                                                                                 | *"Moneycorp"*                                                                                              | :heavy_check_mark:                                                                                         | Identifies the payment provider this configuration targets                                                 |                                                                                                            |