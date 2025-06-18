# V2Payment

## Example Usage

```typescript
import { V2Payment, V2PaymentScheme, V2PaymentStatus, V2PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Payment = {
  adjustments: [
    {
      absolute: true,
      amount: 100n,
      date: new Date("2023-09-10T15:58:54.180Z"),
      raw: {},
      status: V2PaymentStatus.Terminated,
    },
  ],
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2023-06-24T08:08:27.704Z"),
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                 | [shared.V2PaymentAdjustment](../../../sdk/models/shared/v2paymentadjustment.md)[]             | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `metadata`                                                                                    | [shared.V2PaymentMetadata](../../../sdk/models/shared/v2paymentmetadata.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `provider`                                                                                    | [shared.V2Connector](../../../sdk/models/shared/v2connector.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `raw`                                                                                         | [shared.V2PaymentRaw](../../../sdk/models/shared/v2paymentraw.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `scheme`                                                                                      | [shared.V2PaymentScheme](../../../sdk/models/shared/v2paymentscheme.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [shared.V2PaymentStatus](../../../sdk/models/shared/v2paymentstatus.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | [shared.V2PaymentType](../../../sdk/models/shared/v2paymenttype.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |