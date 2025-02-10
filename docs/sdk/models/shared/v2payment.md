# V2Payment

## Example Usage

```typescript
import { Scheme, V2Payment, V2PaymentStatus, V2PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Payment = {
  adjustments: [
    {
      absolute: false,
      amount: BigInt("100"),
      date: new Date("2023-03-18T12:23:43.530Z"),
      raw: {},
      status: V2PaymentStatus.Active,
    },
  ],
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2024-06-11T06:54:21.821Z"),
  destinationAccountID: "<id>",
  id: "XXX",
  initialAmount: BigInt("100"),
  metadata: {},
  raw: {},
  reference: "<value>",
  scheme: Scheme.Discover,
  sourceAccountID: "<id>",
  status: V2PaymentStatus.Cancelled,
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
| `scheme`                                                                                      | [shared.Scheme](../../../sdk/models/shared/scheme.md)                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [shared.V2PaymentStatus](../../../sdk/models/shared/v2paymentstatus.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | [shared.V2PaymentType](../../../sdk/models/shared/v2paymenttype.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |