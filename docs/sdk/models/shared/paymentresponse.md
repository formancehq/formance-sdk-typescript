# PaymentResponse

OK

## Example Usage

```typescript
import { PaymentResponse, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentResponse = {
  data: {
    adjustments: [
      {
        amount: BigInt("100"),
        createdAt: new Date("2024-01-05T13:57:54.417Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.Refunded,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2024-02-09T18:19:43.714Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.Dragonpay,
    sourceAccountID: "<id>",
    status: PaymentStatus.Cancelled,
    type: PaymentType.Transfer,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |