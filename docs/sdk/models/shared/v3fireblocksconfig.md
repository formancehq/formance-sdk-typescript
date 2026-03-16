# V3FireblocksConfig

## Example Usage

```typescript
import { V3FireblocksConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3FireblocksConfig = {
  apiKey: "<value>",
  name: "<value>",
  privateKey: "<value>",
  provider: "Fireblocks",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `privateKey`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `provider`                                                              | *"Fireblocks"*                                                          | :heavy_check_mark:                                                      | N/A                                                                     |