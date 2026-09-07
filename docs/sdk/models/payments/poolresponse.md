# PoolResponse

OK

## Example Usage

```typescript
import { PoolResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolResponse = {
  data: {
    accounts: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [payments.Pool](../../../sdk/models/payments/pool.md)            | :heavy_check_mark:                                               | A named group of accounts whose balances are aggregated together |