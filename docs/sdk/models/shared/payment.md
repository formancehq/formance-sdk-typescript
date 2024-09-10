# Payment

## Example Usage

```typescript
import { Payment, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: Payment = {
  adjustments: [
    {
      amount: BigInt("100"),
      createdAt: new Date("2023-04-01T12:09:35.022Z"),
      raw: {},
      reference: "<value>",
      status: PaymentStatus.Refunded,
    },
  ],
  amount: BigInt("100"),
  asset: "USD",
  connectorID: "<value>",
  createdAt: new Date("2024-10-23T12:46:35.232Z"),
  destinationAccountID: "<value>",
  id: "XXX",
  initialAmount: BigInt("100"),
  metadata: {
    "key": "<value>",
  },
  raw: {},
  reference: "<value>",
  scheme: PaymentScheme.Discover,
  sourceAccountID: "<value>",
  status: PaymentStatus.Dispute,
  type: PaymentType.Other,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustments`                                                                                 | [shared.PaymentAdjustment](../../../sdk/models/shared/paymentadjustment.md)[]                 | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `provider`                                                                                    | [shared.Connector](../../../sdk/models/shared/connector.md)                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `raw`                                                                                         | [shared.Raw](../../../sdk/models/shared/raw.md)                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `scheme`                                                                                      | [shared.PaymentScheme](../../../sdk/models/shared/paymentscheme.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | [shared.PaymentType](../../../sdk/models/shared/paymenttype.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |