# V2Payment

A payment observed or initiated through a connector

## Example Usage

```typescript
import { V2Payment } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Payment = {
  adjustments: [
    {
      absolute: true,
      amount: 100n,
      date: new Date("2024-09-09T15:58:54.180Z"),
      raw: {},
      status: "TERMINATED",
    },
  ],
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2024-06-23T08:08:27.704Z"),
  destinationAccountID: "<id>",
  id: "XXX",
  initialAmount: 100n,
  metadata: {},
  raw: null,
  reference: "<value>",
  scheme: "amex",
  sourceAccountID: "<id>",
  status: "SUCCEEDED",
  type: "PAYOUT",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                   | [orchestration.V2PaymentAdjustment](../../../sdk/models/orchestration/v2paymentadjustment.md)[] | :heavy_check_mark:                                                                              | Successive changes to the payment's amount and status                                           |                                                                                                 |
| `asset`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | Asset the payment is denominated in                                                             | USD                                                                                             |
| `connectorID`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | Identifier of the connector that produced the payment                                           |                                                                                                 |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | When the payment was created                                                                    |                                                                                                 |
| `destinationAccountID`                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | Identifier of the account the funds reached                                                     |                                                                                                 |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | Unique identifier of the payment                                                                | XXX                                                                                             |
| `initialAmount`                                                                                 | *BigInt*                                                                                        | :heavy_check_mark:                                                                              | Amount the payment was created with, before any adjustment                                      | 100                                                                                             |
| `metadata`                                                                                      | [orchestration.V2PaymentMetadata](../../../sdk/models/orchestration/v2paymentmetadata.md)       | :heavy_check_mark:                                                                              | Arbitrary key/value pairs attached to a payment                                                 |                                                                                                 |
| `provider`                                                                                      | [orchestration.V2Connector](../../../sdk/models/orchestration/v2connector.md)                   | :heavy_minus_sign:                                                                              | The payment provider behind a connector                                                         |                                                                                                 |
| `raw`                                                                                           | [orchestration.V2PaymentRaw](../../../sdk/models/orchestration/v2paymentraw.md)                 | :heavy_check_mark:                                                                              | The provider's original payload, passed through untouched                                       |                                                                                                 |
| `reference`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Identifier the payment carries at the provider                                                  |                                                                                                 |
| `scheme`                                                                                        | [orchestration.V2PaymentScheme](../../../sdk/models/orchestration/v2paymentscheme.md)           | :heavy_check_mark:                                                                              | Payment scheme or rail the payment travelled over                                               |                                                                                                 |
| `sourceAccountID`                                                                               | *string*                                                                                        | :heavy_check_mark:                                                                              | Identifier of the account the funds left                                                        |                                                                                                 |
| `status`                                                                                        | [orchestration.V2PaymentStatus](../../../sdk/models/orchestration/v2paymentstatus.md)           | :heavy_check_mark:                                                                              | Where a payment stands in its lifecycle                                                         |                                                                                                 |
| `type`                                                                                          | [orchestration.V2PaymentType](../../../sdk/models/orchestration/v2paymenttype.md)               | :heavy_check_mark:                                                                              | Direction of the payment                                                                        |                                                                                                 |