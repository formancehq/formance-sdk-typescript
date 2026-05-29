# V3Payment

## Example Usage

```typescript
import { V3Payment, V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Payment = {
  v3PaymentStatusEnum: V3PaymentStatusEnum.Capture,
  v3PaymentTypeEnum: V3PaymentTypeEnum.Transfer,
  amount: 624960n,
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2026-08-02T16:59:43.951Z"),
  id: "<id>",
  initialAmount: 276082n,
  provider: "<value>",
  reference: "<value>",
  scheme: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v3Metadata`                                                                                  | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `v3PaymentStatusEnum`                                                                         | [payments.V3PaymentStatusEnum](../../../sdk/models/payments/v3paymentstatusenum.md)           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `v3PaymentTypeEnum`                                                                           | [payments.V3PaymentTypeEnum](../../../sdk/models/payments/v3paymenttypeenum.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `adjustments`                                                                                 | [payments.V3PaymentAdjustment](../../../sdk/models/payments/v3paymentadjustment.md)[]         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheme`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |