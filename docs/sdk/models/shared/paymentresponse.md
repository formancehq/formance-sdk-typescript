# PaymentResponse

## Example Usage

```typescript
import { PaymentResponse, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentResponse = {
  data: {
    adjustments: [
      {
        amount: BigInt("100"),
        createdAt: new Date("2023-11-19T23:56:05.934Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.DisputeWon,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2023-03-16T23:09:39.112Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.Jcb,
    sourceAccountID: "<value>",
    status: PaymentStatus.Expired,
    type: PaymentType.Other,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |