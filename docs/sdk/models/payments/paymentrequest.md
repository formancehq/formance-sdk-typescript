# PaymentRequest

## Example Usage

```typescript
import { PaymentRequest, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentRequest = {
  amount: 100n,
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2026-11-06T04:29:01.370Z"),
  reference: "<value>",
  scheme: PaymentScheme.AchDebit,
  status: PaymentStatus.DisputeWon,
  type: PaymentType.PayIn,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `scheme`                                                                                      | [payments.PaymentScheme](../../../sdk/models/payments/paymentscheme.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [payments.PaymentStatus](../../../sdk/models/payments/paymentstatus.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | [payments.PaymentType](../../../sdk/models/payments/paymenttype.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |