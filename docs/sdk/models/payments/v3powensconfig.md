# V3PowensConfig

## Example Usage

```typescript
import { V3PowensConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PowensConfig = {
  clientID: "<id>",
  clientSecret: "<value>",
  configurationToken: "<value>",
  domain: "indelible-shadowbox.name",
  endpoint: "<value>",
  maxConnectionsPerLink: 110726,
  name: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `clientID`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `clientSecret`                                                          | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `configurationToken`                                                    | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `domain`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `maxConnectionsPerLink`                                                 | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |