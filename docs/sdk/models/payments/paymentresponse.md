# PaymentResponse

OK

## Example Usage

```typescript
import { PaymentResponse, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentResponse = {
  payment: {
    paymentMetadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    paymentScheme: PaymentScheme.Cup,
    paymentStatus: PaymentStatus.Failed,
    paymentType: PaymentType.PayIn,
    adjustments: [
      {
        paymentStatus: PaymentStatus.Refunded,
        amount: 100n,
        createdAt: new Date("2026-04-18T11:25:30.064Z"),
        raw: {},
        reference: "<value>",
      },
    ],
    amount: 100n,
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-12-02T13:35:45.810Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: 100n,
    raw: null,
    reference: "<value>",
    sourceAccountID: "<id>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `payment`                                                   | [payments.Payment](../../../sdk/models/payments/payment.md) | :heavy_check_mark:                                          | N/A                                                         |