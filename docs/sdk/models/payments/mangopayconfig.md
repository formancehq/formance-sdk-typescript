# MangoPayConfig

## Example Usage

```typescript
import { MangoPayConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: MangoPayConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My MangoPay Account",
  pollingPeriod: "120m",
  provider: "Mangopay",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | API key issued by MangoPay, used to authenticate the connector's requests                                 | XXX                                                                                                       |
| `clientID`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Client ID issued by MangoPay                                                                              | XXX                                                                                                       |
| `endpoint`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Base URL of the MangoPay API the connector calls                                                          | XXX                                                                                                       |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Human-readable name identifying this connector instance                                                   | My MangoPay Account                                                                                       |
| `pollingPeriod`                                                                                           | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The frequency at which the connector will try to fetch new BalanceTransaction objects from MangoPay API.<br/> | 120m                                                                                                      |
| `provider`                                                                                                | *"Mangopay"*                                                                                              | :heavy_check_mark:                                                                                        | Identifies the payment provider this configuration targets                                                |                                                                                                           |