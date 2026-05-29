# PaymentAdjustment

## Example Usage

```typescript
import { PaymentAdjustment, PaymentStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentAdjustment = {
  paymentStatus: PaymentStatus.DisputeWon,
  amount: 100n,
  createdAt: new Date("2024-02-24T18:51:28.030Z"),
  raw: {},
  reference: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `paymentStatus`                                                                               | [payments.PaymentStatus](../../../sdk/models/payments/paymentstatus.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `raw`                                                                                         | [payments.PaymentAdjustmentRaw](../../../sdk/models/payments/paymentadjustmentraw.md)         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |