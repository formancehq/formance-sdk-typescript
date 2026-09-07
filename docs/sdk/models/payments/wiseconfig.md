# WiseConfig

## Example Usage

```typescript
import { WiseConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: WiseConfig = {
  apiKey: "XXX",
  name: "My Wise Account",
  pollingPeriod: "120m",
  provider: "Wise",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | API key issued by Wise, used to authenticate the connector's requests                                 | XXX                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Human-readable name identifying this connector instance                                               | My Wise Account                                                                                       |
| `pollingPeriod`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The frequency at which the connector will try to fetch new BalanceTransaction objects from Wise API.<br/> | 120m                                                                                                  |
| `provider`                                                                                            | *"Wise"*                                                                                              | :heavy_check_mark:                                                                                    | Identifies the payment provider this configuration targets                                            |                                                                                                       |