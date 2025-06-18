# ModulrConfig

## Example Usage

```typescript
import { ModulrConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: ModulrConfig = {
  apiKey: "XXX",
  apiSecret: "XXX",
  endpoint: "XXX",
  name: "My Modulr Account",
  pollingPeriod: "60s",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | XXX                                                                                                     |
| `apiSecret`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | XXX                                                                                                     |
| `endpoint`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | XXX                                                                                                     |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | My Modulr Account                                                                                       |
| `pollingPeriod`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The frequency at which the connector will try to fetch new BalanceTransaction objects from Modulr API.<br/> | 60s                                                                                                     |
| `provider`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |