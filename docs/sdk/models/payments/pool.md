# Pool

## Example Usage

```typescript
import { Pool } from "@formance/formance-sdk/sdk/models/payments";

let value: Pool = {
  accounts: [
    "<value 1>",
    "<value 2>",
  ],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `poolTypeEnum`                                                        | [payments.PoolTypeEnum](../../../sdk/models/payments/pooltypeenum.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `accounts`                                                            | *string*[]                                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `query`                                                               | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | N/A                                                                   |