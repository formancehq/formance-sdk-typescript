# PaymentRequest

## Example Usage

```typescript
import { PaymentRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentRequest = {
  amount: 100n,
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2026-11-06T04:29:01.370Z"),
  reference: "<value>",
  scheme: "ach debit",
  status: "DISPUTE_WON",
  type: "PAY-IN",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Amount of the payment, in the asset's smallest unit                                           | 100                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Asset the payment is denominated in                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the payment belongs to                                            |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the payment was created at the provider                                                  |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the account the funds reach                                                     |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the payment carries at the provider                                                |                                                                                               |
| `scheme`                                                                                      | [payments.PaymentScheme](../../../sdk/models/payments/paymentscheme.md)                       | :heavy_check_mark:                                                                            | Payment scheme or rail a payment travels over                                                 |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the account the funds leave                                                     |                                                                                               |
| `status`                                                                                      | [payments.PaymentStatus](../../../sdk/models/payments/paymentstatus.md)                       | :heavy_check_mark:                                                                            | Where a payment stands in its lifecycle                                                       |                                                                                               |
| `type`                                                                                        | [payments.PaymentType](../../../sdk/models/payments/paymenttype.md)                           | :heavy_check_mark:                                                                            | Direction of a payment                                                                        |                                                                                               |