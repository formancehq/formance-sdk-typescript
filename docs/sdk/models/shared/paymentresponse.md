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
        createdAt: new Date("2025-04-17T04:37:18.826Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.Refunded,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-07-02T23:49:03.163Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.Visa,
    sourceAccountID: "<id>",
    status: PaymentStatus.Dispute,
    type: PaymentType.Transfer,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |