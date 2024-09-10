# CurrencyCloudConfig

## Example Usage

```typescript
import { CurrencyCloudConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: CurrencyCloudConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  loginID: "XXX",
  name: "My CurrencyCloud Account",
  pollingPeriod: "60s",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `apiKey`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | XXX                                                                           |
| `endpoint`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The endpoint to use for the API. Defaults to https://devapi.currencycloud.com | XXX                                                                           |
| `loginID`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | Username of the API Key holder                                                | XXX                                                                           |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | My CurrencyCloud Account                                                      |
| `pollingPeriod`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | The frequency at which the connector will fetch transactions                  | 60s                                                                           |