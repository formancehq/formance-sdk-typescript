# PaymentRequest

## Example Usage

```typescript
import { PaymentRequest, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentRequest = {
  paymentScheme: PaymentScheme.Ach,
  paymentStatus: PaymentStatus.Other,
  paymentType: PaymentType.Other,
  amount: 100n,
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2024-08-30T01:50:06.894Z"),
  reference: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `paymentScheme`                                                                               | [payments.PaymentScheme](../../../sdk/models/payments/paymentscheme.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentStatus`                                                                               | [payments.PaymentStatus](../../../sdk/models/payments/paymentstatus.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentType`                                                                                 | [payments.PaymentType](../../../sdk/models/payments/paymenttype.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |