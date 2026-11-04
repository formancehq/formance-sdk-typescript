# V2PaymentAdjustment

## Example Usage

```typescript
import { V2PaymentAdjustment } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2PaymentAdjustment = {
  absolute: false,
  amount: 100n,
  date: new Date("2024-04-08T12:47:58.385Z"),
  raw: {},
  status: "SUCCEEDED",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `absolute`                                                                                          | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Whether amount replaces the payment's amount rather than adding to it                               |                                                                                                     |
| `amount`                                                                                            | *BigInt*                                                                                            | :heavy_check_mark:                                                                                  | Amount carried by this adjustment                                                                   | 100                                                                                                 |
| `date`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | When the adjustment was recorded                                                                    |                                                                                                     |
| `raw`                                                                                               | [orchestration.V2PaymentAdjustmentRaw](../../../sdk/models/orchestration/v2paymentadjustmentraw.md) | :heavy_check_mark:                                                                                  | The provider's original payload for this adjustment                                                 |                                                                                                     |
| `status`                                                                                            | [orchestration.V2PaymentStatus](../../../sdk/models/orchestration/v2paymentstatus.md)               | :heavy_check_mark:                                                                                  | Where a payment stands in its lifecycle                                                             |                                                                                                     |