# V2Payment

## Example Usage

```typescript
import { V2Payment, V2PaymentScheme, V2PaymentStatus, V2PaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Payment = {
  adjustments: [
    {
      absolute: true,
      amount: 100n,
      date: new Date("2024-09-09T15:58:54.180Z"),
      raw: {},
      status: V2PaymentStatus.Terminated,
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
  scheme: V2PaymentScheme.Amex,
  sourceAccountID: "<id>",
  status: V2PaymentStatus.Succeeded,
  type: V2PaymentType.Payout,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                   | [orchestration.V2PaymentAdjustment](../../../sdk/models/orchestration/v2paymentadjustment.md)[] | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `asset`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | USD                                                                                             |
| `connectorID`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `destinationAccountID`                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | XXX                                                                                             |
| `initialAmount`                                                                                 | *BigInt*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 100                                                                                             |
| `metadata`                                                                                      | [orchestration.V2PaymentMetadata](../../../sdk/models/orchestration/v2paymentmetadata.md)       | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `provider`                                                                                      | [orchestration.V2Connector](../../../sdk/models/orchestration/v2connector.md)                   | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `raw`                                                                                           | [orchestration.V2PaymentRaw](../../../sdk/models/orchestration/v2paymentraw.md)                 | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `reference`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `scheme`                                                                                        | [orchestration.V2PaymentScheme](../../../sdk/models/orchestration/v2paymentscheme.md)           | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `sourceAccountID`                                                                               | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `status`                                                                                        | [orchestration.V2PaymentStatus](../../../sdk/models/orchestration/v2paymentstatus.md)           | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `type`                                                                                          | [orchestration.V2PaymentType](../../../sdk/models/orchestration/v2paymenttype.md)               | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |