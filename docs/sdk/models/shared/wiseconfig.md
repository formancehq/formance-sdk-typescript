# WiseConfig

## Example Usage

```typescript
import { WiseConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: WiseConfig = {
  apiKey: "XXX",
  name: "My Wise Account",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | XXX                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | My Wise Account                                                                                       |
| `pollingPeriod`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The frequency at which the connector will try to fetch new BalanceTransaction objects from Wise API.<br/> | 60s                                                                                                   |
| `provider`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |