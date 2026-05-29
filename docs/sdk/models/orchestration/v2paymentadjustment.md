# V2PaymentAdjustment

## Example Usage

```typescript
import { V2PaymentAdjustment, V2PaymentStatus } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2PaymentAdjustment = {
  v2PaymentStatus: V2PaymentStatus.Succeeded,
  absolute: true,
  amount: 100n,
  date: new Date("2026-02-23T23:00:57.021Z"),
  raw: {},
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `v2PaymentStatus`                                                                                   | [orchestration.V2PaymentStatus](../../../sdk/models/orchestration/v2paymentstatus.md)               | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `absolute`                                                                                          | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `amount`                                                                                            | *BigInt*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | 100                                                                                                 |
| `date`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `raw`                                                                                               | [orchestration.V2PaymentAdjustmentRaw](../../../sdk/models/orchestration/v2paymentadjustmentraw.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |