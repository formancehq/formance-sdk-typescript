# V3BankingcircleConfig

## Example Usage

```typescript
import { V3BankingcircleConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3BankingcircleConfig = {
  authorizationEndpoint: "<value>",
  endpoint: "<value>",
  name: "<value>",
  password: "x2JumI7CZjxPmAq",
  provider: "Bankingcircle",
  userCertificate: "<value>",
  userCertificateKey: "<value>",
  username: "Savion88",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `authorizationEndpoint`                                                 | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `endpoint`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `password`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | *"Bankingcircle"*                                                       | :heavy_check_mark:                                                      | N/A                                                                     |
| `userCertificate`                                                       | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `userCertificateKey`                                                    | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `username`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |