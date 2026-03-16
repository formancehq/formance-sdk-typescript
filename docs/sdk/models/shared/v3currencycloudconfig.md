# V3CurrencycloudConfig

## Example Usage

```typescript
import { V3CurrencycloudConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CurrencycloudConfig = {
  apiKey: "<value>",
  endpoint: "<value>",
  loginID: "<id>",
  name: "<value>",
  provider: "Currencycloud",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `loginID`                                                               | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Currencycloud"*                                                       | :heavy_check_mark:                                                      | N/A                                                                     |