# PaymentAdjustment

## Example Usage

```typescript
import { PaymentAdjustment, PaymentStatus } from "@formance/formance-sdk/sdk/models/orchestration";

let value: PaymentAdjustment = {
  absolute: false,
  amount: 100n,
  date: new Date("2024-02-24T18:51:28.030Z"),
  raw: {},
  status: PaymentStatus.Pending,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `absolute`                                                                                      | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `amount`                                                                                        | *BigInt*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 100                                                                                             |
| `date`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `raw`                                                                                           | [orchestration.PaymentAdjustmentRaw](../../../sdk/models/orchestration/paymentadjustmentraw.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `status`                                                                                        | [orchestration.PaymentStatus](../../../sdk/models/orchestration/paymentstatus.md)               | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |