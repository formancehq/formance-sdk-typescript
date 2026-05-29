# V3GetPoolResponse

## Example Usage

```typescript
import { V3GetPoolResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetPoolResponse = {
  v3Pool: {
    createdAt: new Date("2024-12-22T12:30:42.599Z"),
    id: "<id>",
    name: "<value>",
    poolAccounts: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `v3Pool`                                                  | [payments.V3Pool](../../../sdk/models/payments/v3pool.md) | :heavy_check_mark:                                        | N/A                                                       |