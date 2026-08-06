# V3CreatePaymentAdjustmentRequest

## Example Usage

```typescript
import { V3CreatePaymentAdjustmentRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3CreatePaymentAdjustmentRequest = {
  createdAt: new Date("2024-07-01T23:19:27.307Z"),
  reference: "<value>",
  status: "DISPUTE_WON",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [payments.V3PaymentStatusEnum](../../../sdk/models/payments/v3paymentstatusenum.md)           | :heavy_check_mark:                                                                            | N/A                                                                                           |