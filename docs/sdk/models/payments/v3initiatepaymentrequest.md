# V3InitiatePaymentRequest

## Example Usage

```typescript
import { V3InitiatePaymentRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3InitiatePaymentRequest = {
  amount: 51037n,
  asset: "<value>",
  connectorID: "<value>",
  description:
    "worriedly camouflage impossible inside unimportant instead hornet",
  reference: "<value>",
  scheduledAt: new Date("2025-05-26T13:28:26.343Z"),
  type: "UNKNOWN",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `amount`                                                                                            | *BigInt*                                                                                            | :heavy_check_mark:                                                                                  | Amount to move, in the asset's smallest unit                                                        |
| `asset`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | Asset the payment is denominated in                                                                 |
| `connectorID`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | Identifier of the connector to execute the payment through                                          |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | Human-readable description carried with the payment                                                 |
| `destinationAccountID`                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Identifier of the account the funds reach                                                           |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | Arbitrary key/value pairs attached to the resource                                                  |
| `reference`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | Caller-supplied identifier for the initiation, used to deduplicate retries                          |
| `scheduledAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | When the payment should be executed                                                                 |
| `sourceAccountID`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Identifier of the account the funds leave                                                           |
| `type`                                                                                              | [payments.V3PaymentInitiationTypeEnum](../../../sdk/models/payments/v3paymentinitiationtypeenum.md) | :heavy_check_mark:                                                                                  | Kind of movement a payment initiation performs, such as a transfer or a payout                      |