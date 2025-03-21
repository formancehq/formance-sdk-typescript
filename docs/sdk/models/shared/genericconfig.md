# GenericConfig

## Example Usage

```typescript
import { GenericConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: GenericConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  name: "My Generic Account",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | XXX                                                                                                  |
| `endpoint`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | XXX                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | My Generic Account                                                                                   |
| `pollingPeriod`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The frequency at which the connector will try to fetch new BalanceTransaction objects from the API.<br/> | 60s                                                                                                  |
| `provider`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |