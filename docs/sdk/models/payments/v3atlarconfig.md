# V3AtlarConfig

## Example Usage

```typescript
import { V3AtlarConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: V3AtlarConfig = {
  accessKey: "<value>",
  baseUrl: "https://annual-mentor.net",
  name: "<value>",
  secret: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `accessKey`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `baseUrl`                                                               | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `secret`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |