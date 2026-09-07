# AdyenConfig

## Example Usage

```typescript
import { AdyenConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: AdyenConfig = {
  apiKey: "XXX",
  hmacKey: "XXX",
  liveEndpointPrefix: "XXX",
  name: "My Adyen Account",
  pollingPeriod: "60s",
  provider: "Adyen",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | API key issued by Adyen, used to authenticate the connector's requests                                 | XXX                                                                                                    |
| `hmacKey`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | HMAC key used to verify the signature on webhooks sent by Adyen                                        | XXX                                                                                                    |
| `liveEndpointPrefix`                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Prefix of your live Adyen endpoint. Required when the connector runs against production                | XXX                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Human-readable name identifying this connector instance                                                | My Adyen Account                                                                                       |
| `pollingPeriod`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The frequency at which the connector will try to fetch new BalanceTransaction objects from Adyen API.<br/> | 60s                                                                                                    |
| `provider`                                                                                             | *"Adyen"*                                                                                              | :heavy_check_mark:                                                                                     | Identifies the payment provider this configuration targets                                             |                                                                                                        |