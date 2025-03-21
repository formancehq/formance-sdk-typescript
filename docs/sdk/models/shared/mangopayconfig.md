# MangoPayConfig

## Example Usage

```typescript
import { MangoPayConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: MangoPayConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My MangoPay Account",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | XXX                                                                                                       |
| `clientID`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | XXX                                                                                                       |
| `endpoint`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | XXX                                                                                                       |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | My MangoPay Account                                                                                       |
| `pollingPeriod`                                                                                           | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The frequency at which the connector will try to fetch new BalanceTransaction objects from MangoPay API.<br/> | 60s                                                                                                       |
| `provider`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |