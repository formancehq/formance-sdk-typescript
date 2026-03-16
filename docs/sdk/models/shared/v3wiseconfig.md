# V3WiseConfig

## Example Usage

```typescript
import { V3WiseConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3WiseConfig = {
  apiKey: "<value>",
  name: "<value>",
  provider: "Wise",
  webhookPublicKey: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Wise"*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `webhookPublicKey`                                                      | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |