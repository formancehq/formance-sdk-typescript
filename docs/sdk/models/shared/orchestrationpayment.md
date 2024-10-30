# OrchestrationPayment

## Example Usage

```typescript
import {
  OrchestrationPayment,
  OrchestrationPaymentScheme,
  OrchestrationPaymentStatus,
  OrchestrationPaymentType,
} from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationPayment = {
  adjustments: [
    {
      absolute: false,
      amount: BigInt("100"),
      date: new Date("2024-04-25T16:14:24.819Z"),
      raw: {},
      status: OrchestrationPaymentStatus.Failed,
    },
  ],
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2024-12-09T08:09:09.462Z"),
  destinationAccountID: "<id>",
  id: "XXX",
  initialAmount: BigInt("100"),
  metadata: {},
  raw: {},
  reference: "<value>",
  scheme: OrchestrationPaymentScheme.Mastercard,
  sourceAccountID: "<id>",
  status: OrchestrationPaymentStatus.Succeeded,
  type: OrchestrationPaymentType.Payout,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                           | [shared.OrchestrationPaymentAdjustment](../../../sdk/models/shared/orchestrationpaymentadjustment.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `asset`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | USD                                                                                                     |
| `connectorID`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `destinationAccountID`                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | XXX                                                                                                     |
| `initialAmount`                                                                                         | *BigInt*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 100                                                                                                     |
| `metadata`                                                                                              | [shared.OrchestrationPaymentMetadata](../../../sdk/models/shared/orchestrationpaymentmetadata.md)       | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `provider`                                                                                              | [shared.OrchestrationConnector](../../../sdk/models/shared/orchestrationconnector.md)                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `raw`                                                                                                   | [shared.OrchestrationPaymentRaw](../../../sdk/models/shared/orchestrationpaymentraw.md)                 | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `reference`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `scheme`                                                                                                | [shared.OrchestrationPaymentScheme](../../../sdk/models/shared/orchestrationpaymentscheme.md)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `sourceAccountID`                                                                                       | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `status`                                                                                                | [shared.OrchestrationPaymentStatus](../../../sdk/models/shared/orchestrationpaymentstatus.md)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `type`                                                                                                  | [shared.OrchestrationPaymentType](../../../sdk/models/shared/orchestrationpaymenttype.md)               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |