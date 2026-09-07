# Payment

A payment observed at a provider and surfaced through a connector

## Example Usage

```typescript
import { Payment } from "@formance/formance-sdk/sdk/models/payments";

let value: Payment = {
  adjustments: [],
  amount: 100n,
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2026-11-17T06:22:17.047Z"),
  destinationAccountID: "<id>",
  id: "XXX",
  initialAmount: 100n,
  metadata: null,
  raw: null,
  reference: "<value>",
  scheme: "a2a",
  sourceAccountID: "<id>",
  status: "FAILED",
  type: "PAYOUT",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                 | [payments.PaymentAdjustment](../../../sdk/models/payments/paymentadjustment.md)[]             | :heavy_check_mark:                                                                            | Successive changes to the payment's amount and status                                         |                                                                                               |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Current amount of the payment after applying its adjustments                                  | 100                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Asset the payment is denominated in                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the payment belongs to                                            |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the payment was created at the provider                                                  |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the account the funds reached                                                   |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the payment within Formance                                              | XXX                                                                                           |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Amount the payment was created with, before any adjustment                                    | 100                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Arbitrary key/value pairs attached to the payment                                             |                                                                                               |
| `provider`                                                                                    | [payments.Connector](../../../sdk/models/payments/connector.md)                               | :heavy_minus_sign:                                                                            | The payment provider behind a connector                                                       |                                                                                               |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | The provider's original payload, passed through untouched                                     |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the payment carries at the provider                                                |                                                                                               |
| `scheme`                                                                                      | [payments.PaymentScheme](../../../sdk/models/payments/paymentscheme.md)                       | :heavy_check_mark:                                                                            | Payment scheme or rail a payment travels over                                                 |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the account the funds left                                                      |                                                                                               |
| `status`                                                                                      | [payments.PaymentStatus](../../../sdk/models/payments/paymentstatus.md)                       | :heavy_check_mark:                                                                            | Where a payment stands in its lifecycle                                                       |                                                                                               |
| `type`                                                                                        | [payments.PaymentType](../../../sdk/models/payments/paymenttype.md)                           | :heavy_check_mark:                                                                            | Direction of a payment                                                                        |                                                                                               |