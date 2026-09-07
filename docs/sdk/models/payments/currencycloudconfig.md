# CurrencyCloudConfig

## Example Usage

```typescript
import { CurrencyCloudConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: CurrencyCloudConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  loginID: "XXX",
  name: "My CurrencyCloud Account",
  pollingPeriod: "60s",
  provider: "Currencycloud",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `apiKey`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | API key issued by Currencycloud, used to authenticate the connector's requests | XXX                                                                            |
| `endpoint`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The endpoint to use for the API. Defaults to https://devapi.currencycloud.com  | XXX                                                                            |
| `loginID`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Username of the API Key holder                                                 | XXX                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | Human-readable name identifying this connector instance                        | My CurrencyCloud Account                                                       |
| `pollingPeriod`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | The frequency at which the connector will fetch transactions                   | 60s                                                                            |
| `provider`                                                                     | *"Currencycloud"*                                                              | :heavy_check_mark:                                                             | Identifies the payment provider this configuration targets                     |                                                                                |