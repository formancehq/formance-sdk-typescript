# Payment

A payment observed or initiated through a connector

## Example Usage

```typescript
import { Payment } from "@formance/formance-sdk/sdk/models/orchestration";

let value: Payment = {
  adjustments: [],
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2026-11-17T06:22:17.047Z"),
  destinationAccountID: "<id>",
  id: "XXX",
  initialAmount: 100n,
  metadata: null,
  raw: null,
  reference: "<value>",
  scheme: "rtp",
  sourceAccountID: "<id>",
  status: "TERMINATED",
  type: "PAYOUT",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                 | [orchestration.PaymentAdjustment](../../../sdk/models/orchestration/paymentadjustment.md)[]   | :heavy_check_mark:                                                                            | Successive changes to the payment's amount and status                                         |                                                                                               |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Asset the payment is denominated in                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector that produced the payment                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the payment was created                                                                  |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the account the funds reached                                                   |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the payment                                                              | XXX                                                                                           |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | Amount the payment was created with, before any adjustment                                    | 100                                                                                           |
| `metadata`                                                                                    | [orchestration.PaymentMetadata](../../../sdk/models/orchestration/paymentmetadata.md)         | :heavy_check_mark:                                                                            | Arbitrary key/value pairs attached to a payment                                               |                                                                                               |
| `provider`                                                                                    | [orchestration.Connector](../../../sdk/models/orchestration/connector.md)                     | :heavy_minus_sign:                                                                            | The payment provider behind a connector                                                       |                                                                                               |
| `raw`                                                                                         | [orchestration.PaymentRaw](../../../sdk/models/orchestration/paymentraw.md)                   | :heavy_check_mark:                                                                            | The provider's original payload, passed through untouched                                     |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the payment carries at the provider                                                |                                                                                               |
| `scheme`                                                                                      | [orchestration.PaymentScheme](../../../sdk/models/orchestration/paymentscheme.md)             | :heavy_check_mark:                                                                            | Payment scheme or rail the payment travelled over                                             |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the account the funds left                                                      |                                                                                               |
| `status`                                                                                      | [orchestration.PaymentStatus](../../../sdk/models/orchestration/paymentstatus.md)             | :heavy_check_mark:                                                                            | Where a payment stands in its lifecycle                                                       |                                                                                               |
| `type`                                                                                        | [orchestration.PaymentType](../../../sdk/models/orchestration/paymenttype.md)                 | :heavy_check_mark:                                                                            | Direction of the payment                                                                      |                                                                                               |