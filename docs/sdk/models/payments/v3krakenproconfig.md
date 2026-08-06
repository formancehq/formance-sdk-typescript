# V3KrakenproConfig

## Example Usage

```typescript
import { V3KrakenproConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: V3KrakenproConfig = {
  apiKey: "<value>",
  apiSecret: "<value>",
  endpoint: "<value>",
  name: "<value>",
  provider: "Krakenpro",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `apiSecret`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Krakenpro"*                                                           | :heavy_check_mark:                                                      | N/A                                                                     |