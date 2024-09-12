# OrchestrationPaymentAdjustment

## Example Usage

```typescript
import { OrchestrationPaymentAdjustment, OrchestrationPaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationPaymentAdjustment = {
  absolute: false,
  amount: BigInt("100"),
  date: new Date("2023-07-16T15:31:42.506Z"),
  raw: {},
  status: OrchestrationPaymentStatus.Terminated,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `absolute`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `amount`                                                                                                    | *BigInt*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 100                                                                                                         |
| `date`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `raw`                                                                                                       | [shared.OrchestrationPaymentAdjustmentRaw](../../../sdk/models/shared/orchestrationpaymentadjustmentraw.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `status`                                                                                                    | [shared.OrchestrationPaymentStatus](../../../sdk/models/shared/orchestrationpaymentstatus.md)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |