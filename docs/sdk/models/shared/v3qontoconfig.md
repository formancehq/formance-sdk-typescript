# V3QontoConfig

## Example Usage

```typescript
import { V3QontoConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3QontoConfig = {
  apiKey: "<value>",
  clientID: "<id>",
  endpoint: "<value>",
  name: "<value>",
  provider: "Qonto",
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
| `provider`                                                              | *"Qonto"*                                                               | :heavy_check_mark:                                                      | N/A                                                                     |
| `stagingToken`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |