# GenericConfig

## Example Usage

```typescript
import { GenericConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: GenericConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  name: "My Generic Account",
  pollingPeriod: "120m",
  provider: "Generic",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | API key used to authenticate the connector's requests                                                | XXX                                                                                                  |
| `endpoint`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Base URL of the API the connector calls                                                              | XXX                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Human-readable name identifying this connector instance                                              | My Generic Account                                                                                   |
| `pollingPeriod`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The frequency at which the connector will try to fetch new BalanceTransaction objects from the API.<br/> | 120m                                                                                                 |
| `provider`                                                                                           | *"Generic"*                                                                                          | :heavy_check_mark:                                                                                   | Identifies the payment provider this configuration targets                                           |                                                                                                      |