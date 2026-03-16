# V3CoinbaseprimeConfig

## Example Usage

```typescript
import { V3CoinbaseprimeConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CoinbaseprimeConfig = {
  apiKey: "<value>",
  apiSecret: "<value>",
  name: "<value>",
  passphrase: "<value>",
  portfolioId: "<id>",
  provider: "Coinbaseprime",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `apiSecret`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| ~~`pageSize`~~                                                          | *number*                                                                | :heavy_minus_sign:                                                      | : warning: ** DEPRECATED **: From v3.1, this parameter will be ignored. |
| `passphrase`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `pollingPeriod`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `portfolioId`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `provider`                                                              | *"Coinbaseprime"*                                                       | :heavy_check_mark:                                                      | N/A                                                                     |