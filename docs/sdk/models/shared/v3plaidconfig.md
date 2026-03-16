# V3PlaidConfig

## Example Usage

```typescript
import { V3PlaidConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PlaidConfig = {
  clientID: "<id>",
  clientSecret: "<value>",
  name: "<value>",
  provider: "Plaid",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `clientID`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `clientSecret`                                                          | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `isSandbox`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Plaid"*                                                               | :heavy_check_mark:                                                      | N/A                                                                     |