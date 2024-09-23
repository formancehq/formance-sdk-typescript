# PaymentResponse

## Example Usage

```typescript
import { PaymentResponse, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentResponse = {
  data: {
    adjustments: [
      {
        amount: BigInt("100"),
        createdAt: new Date("2024-10-13T00:20:56.549Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.Succeeded,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2022-08-27T03:18:21.918Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.Dragonpay,
    sourceAccountID: "<value>",
    status: PaymentStatus.Cancelled,
    type: PaymentType.Payout,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |