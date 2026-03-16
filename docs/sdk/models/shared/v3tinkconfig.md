# V3TinkConfig

## Example Usage

```typescript
import { V3TinkConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3TinkConfig = {
  clientID: "<id>",
  clientSecret: "<value>",
  endpoint: "<value>",
  name: "<value>",
  provider: "Tink",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `clientID`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `clientSecret`                                                          | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Tink"*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |