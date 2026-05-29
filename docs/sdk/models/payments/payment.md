# Payment

## Example Usage

```typescript
import { Payment, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/payments";

let value: Payment = {
  paymentMetadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  paymentScheme: PaymentScheme.Other,
  paymentStatus: PaymentStatus.Pending,
  paymentType: PaymentType.Other,
  adjustments: [],
  amount: 100n,
  asset: "USD",
  connectorID: "<id>",
  createdAt: new Date("2025-04-14T15:21:37.217Z"),
  destinationAccountID: "<id>",
  id: "XXX",
  initialAmount: 100n,
  raw: {},
  reference: "<value>",
  sourceAccountID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connector`                                                                                   | [payments.Connector](../../../sdk/models/payments/connector.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentMetadata`                                                                             | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentScheme`                                                                               | [payments.PaymentScheme](../../../sdk/models/payments/paymentscheme.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentStatus`                                                                               | [payments.PaymentStatus](../../../sdk/models/payments/paymentstatus.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentType`                                                                                 | [payments.PaymentType](../../../sdk/models/payments/paymenttype.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `adjustments`                                                                                 | [payments.PaymentAdjustment](../../../sdk/models/payments/paymentadjustment.md)[]             | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `amount`                                                                                      | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `asset`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | USD                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `destinationAccountID`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
| `initialAmount`                                                                               | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 100                                                                                           |
| `raw`                                                                                         | [payments.PaymentRaw](../../../sdk/models/payments/paymentraw.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceAccountID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |