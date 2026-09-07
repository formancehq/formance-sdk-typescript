# V3Payment

A payment observed at a provider and surfaced through a connector

## Example Usage

```typescript
import { V3Payment } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Payment = {
  amount: 873532n,
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2026-02-16T03:38:40.724Z"),
  id: "<id>",
  initialAmount: 624960n,
  provider: "<value>",
  reference: "<value>",
  scheme: "<value>",
  status: "CAPTURE",
  type: "PAY-IN",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                 | [payments.V3PaymentAdjustment](../../../sdk/models/payments/v3paymentadjustment.md)[]         | :heavy_minus_sign:                                                                            | Successive changes to the payment's amount and status, newest first                           |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Current amount of the payment after applying its adjustments                                  |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Asset the payment is denominated in                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the payment belongs to                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the payment was created at the provider                                                  |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the account the funds reached                                                   |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the payment within Formance                                              |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Amount the payment was created with, before any adjustment                                    |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the resource                                            |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the payment provider behind the connector                                             |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the payment carries at the provider                                                |
| `scheme`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Payment scheme or rail the payment travelled over                                             |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the account the funds left                                                      |
| `status`                                                                                      | [payments.V3PaymentStatusEnum](../../../sdk/models/payments/v3paymentstatusenum.md)           | :heavy_check_mark:                                                                            | Where a payment stands in its lifecycle                                                       |
| `type`                                                                                        | [payments.V3PaymentTypeEnum](../../../sdk/models/payments/v3paymenttypeenum.md)               | :heavy_check_mark:                                                                            | Direction of a payment                                                                        |