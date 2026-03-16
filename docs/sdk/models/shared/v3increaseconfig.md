# V3IncreaseConfig

## Example Usage

```typescript
import { V3IncreaseConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3IncreaseConfig = {
  apiKey: "<value>",
  endpoint: "<value>",
  name: "<value>",
  provider: "Increase",
  webhookSharedSecret: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Increase"*                                                            | :heavy_check_mark:                                                      | N/A                                                                     |
| `webhookSharedSecret`                                                   | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |