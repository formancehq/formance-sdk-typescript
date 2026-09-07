# ModulrConfig

## Example Usage

```typescript
import { ModulrConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: ModulrConfig = {
  apiKey: "XXX",
  apiSecret: "XXX",
  endpoint: "XXX",
  name: "My Modulr Account",
  pollingPeriod: "120m",
  provider: "Modulr",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | API key issued by Modulr, used to authenticate the connector's requests                                 | XXX                                                                                                     |
| `apiSecret`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | API secret issued by Modulr, paired with the API key to sign requests                                   | XXX                                                                                                     |
| `endpoint`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Base URL of the Modulr API the connector calls                                                          | XXX                                                                                                     |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Human-readable name identifying this connector instance                                                 | My Modulr Account                                                                                       |
| `pollingPeriod`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The frequency at which the connector will try to fetch new BalanceTransaction objects from Modulr API.<br/> | 120m                                                                                                    |
| `provider`                                                                                              | *"Modulr"*                                                                                              | :heavy_check_mark:                                                                                      | Identifies the payment provider this configuration targets                                              |                                                                                                         |