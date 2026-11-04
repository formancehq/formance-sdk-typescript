# PaymentAdjustment

## Example Usage

```typescript
import { PaymentAdjustment } from "@formance/formance-sdk/sdk/models/orchestration";

let value: PaymentAdjustment = {
  absolute: false,
  amount: 100n,
  date: new Date("2024-02-24T18:51:28.030Z"),
  raw: {},
  status: "PENDING",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `absolute`                                                                                      | *boolean*                                                                                       | :heavy_check_mark:                                                                              | Whether amount replaces the payment's amount rather than adding to it                           |                                                                                                 |
| `amount`                                                                                        | *BigInt*                                                                                        | :heavy_check_mark:                                                                              | Amount carried by this adjustment                                                               | 100                                                                                             |
| `date`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | When the adjustment was recorded                                                                |                                                                                                 |
| `raw`                                                                                           | [orchestration.PaymentAdjustmentRaw](../../../sdk/models/orchestration/paymentadjustmentraw.md) | :heavy_check_mark:                                                                              | The provider's original payload for this adjustment                                             |                                                                                                 |
| `status`                                                                                        | [orchestration.PaymentStatus](../../../sdk/models/orchestration/paymentstatus.md)               | :heavy_check_mark:                                                                              | Where a payment stands in its lifecycle                                                         |                                                                                                 |