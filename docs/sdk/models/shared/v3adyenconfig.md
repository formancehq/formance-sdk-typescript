# V3AdyenConfig

## Example Usage

```typescript
import { V3AdyenConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3AdyenConfig = {
  apiKey: "<value>",
  companyID: "<id>",
  name: "<value>",
  provider: "Adyen",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `companyID`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `liveEndpointPrefix`                                                    | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Adyen"*                                                               | :heavy_check_mark:                                                      | N/A                                                                     |
| `webhookPassword`                                                       | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `webhookUsername`                                                       | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |