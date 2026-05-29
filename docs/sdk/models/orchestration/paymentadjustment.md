# PaymentAdjustment

## Example Usage

```typescript
import { PaymentAdjustment, PaymentStatus } from "@formance/formance-sdk/sdk/models/orchestration";

let value: PaymentAdjustment = {
  paymentStatus: PaymentStatus.Succeeded,
  absolute: true,
  amount: 100n,
  date: new Date("2024-02-10T23:26:03.524Z"),
  raw: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `paymentStatus`                                                                                 | [orchestration.PaymentStatus](../../../sdk/models/orchestration/paymentstatus.md)               | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `absolute`                                                                                      | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `amount`                                                                                        | *BigInt*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 100                                                                                             |
| `date`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `raw`                                                                                           | [orchestration.PaymentAdjustmentRaw](../../../sdk/models/orchestration/paymentadjustmentraw.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |