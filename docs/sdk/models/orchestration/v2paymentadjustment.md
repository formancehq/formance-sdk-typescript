# V2PaymentAdjustment

## Example Usage

```typescript
import { V2PaymentAdjustment, V2PaymentStatus } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2PaymentAdjustment = {
  absolute: false,
  amount: 100n,
  date: new Date("2024-04-08T12:47:58.385Z"),
  raw: {},
  status: V2PaymentStatus.Succeeded,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `absolute`                                                                                          | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `amount`                                                                                            | *BigInt*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | 100                                                                                                 |
| `date`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `raw`                                                                                               | [orchestration.V2PaymentAdjustmentRaw](../../../sdk/models/orchestration/v2paymentadjustmentraw.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `status`                                                                                            | [orchestration.V2PaymentStatus](../../../sdk/models/orchestration/v2paymentstatus.md)               | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |