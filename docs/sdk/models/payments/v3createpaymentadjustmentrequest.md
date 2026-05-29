# V3CreatePaymentAdjustmentRequest

## Example Usage

```typescript
import { V3CreatePaymentAdjustmentRequest, V3PaymentStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3CreatePaymentAdjustmentRequest = {
  v3PaymentStatusEnum: V3PaymentStatusEnum.Succeeded,
  createdAt: new Date("2025-10-26T12:19:25.913Z"),
  reference: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v3Metadata`                                                                                  | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `v3PaymentStatusEnum`                                                                         | [payments.V3PaymentStatusEnum](../../../sdk/models/payments/v3paymentstatusenum.md)           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |