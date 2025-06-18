# V3CreatePaymentAdjustmentRequest

## Example Usage

```typescript
import { V3CreatePaymentAdjustmentRequest, V3PaymentStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreatePaymentAdjustmentRequest = {
  createdAt: new Date("2023-07-02T23:19:27.307Z"),
  reference: "<value>",
  status: V3PaymentStatusEnum.DisputeWon,
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
| `status`                                                                                      | [shared.V3PaymentStatusEnum](../../../sdk/models/shared/v3paymentstatusenum.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |