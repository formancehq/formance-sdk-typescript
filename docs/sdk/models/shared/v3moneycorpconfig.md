# V3MoneycorpConfig

## Example Usage

```typescript
import { V3MoneycorpConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3MoneycorpConfig = {
  apiKey: "<value>",
  clientID: "<id>",
  endpoint: "<value>",
  name: "<value>",
  provider: "Moneycorp",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `clientID`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Moneycorp"*                                                           | :heavy_check_mark:                                                      | N/A                                                                     |