# AdyenConfig

## Example Usage

```typescript
import { AdyenConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: AdyenConfig = {
  apiKey: "XXX",
  hmacKey: "XXX",
  liveEndpointPrefix: "XXX",
  name: "My Adyen Account",
  pollingPeriod: "60s",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | XXX                                                                                                    |
| `hmacKey`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | XXX                                                                                                    |
| `liveEndpointPrefix`                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | XXX                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | My Adyen Account                                                                                       |
| `pollingPeriod`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The frequency at which the connector will try to fetch new BalanceTransaction objects from Adyen API.<br/> | 60s                                                                                                    |
| `provider`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |