# V3PaymentInitiation

A payment Formance asked a connector to execute

## Example Usage

```typescript
import { V3PaymentInitiation } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiation = {
  amount: 321409n,
  asset: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2025-11-23T00:31:39.339Z"),
  description: "tusk regarding spear newsletter bah gosh",
  id: "<id>",
  provider: "<value>",
  reference: "<value>",
  scheduledAt: new Date("2024-09-01T23:09:00.874Z"),
  status: "UNKNOWN",
  type: "PAYOUT",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                | *BigInt*                                                                                                | :heavy_check_mark:                                                                                      | Amount to move, in the asset's smallest unit                                                            |
| `asset`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | Asset the payment is denominated in                                                                     |
| `connectorID`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | Identifier of the connector executing the payment                                                       |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | When the initiation was created                                                                         |
| `description`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | Human-readable description carried with the payment                                                     |
| `destinationAccountID`                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Identifier of the account the funds reach                                                               |
| `error`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Why the initiation failed, absent when it succeeded                                                     |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique identifier of the payment initiation                                                             |
| `metadata`                                                                                              | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | Arbitrary key/value pairs attached to the resource                                                      |
| `provider`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | Name of the payment provider behind the connector                                                       |
| `reference`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | Caller-supplied identifier for the initiation                                                           |
| `scheduledAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | When the payment is scheduled to execute                                                                |
| `sourceAccountID`                                                                                       | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Identifier of the account the funds leave                                                               |
| `status`                                                                                                | [payments.V3PaymentInitiationStatusEnum](../../../sdk/models/payments/v3paymentinitiationstatusenum.md) | :heavy_check_mark:                                                                                      | Where a payment initiation stands in its lifecycle                                                      |
| `type`                                                                                                  | [payments.V3PaymentInitiationTypeEnum](../../../sdk/models/payments/v3paymentinitiationtypeenum.md)     | :heavy_check_mark:                                                                                      | Kind of movement a payment initiation performs, such as a transfer or a payout                          |