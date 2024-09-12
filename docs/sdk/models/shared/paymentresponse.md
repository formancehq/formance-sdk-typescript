# PaymentResponse

## Example Usage

```typescript
import { PaymentResponse, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentResponse = {
  data: {
    adjustments: [
      {
        amount: BigInt("100"),
        createdAt: new Date("2024-05-29T18:00:50.361Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.Failed,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2024-07-05T15:43:09.972Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.Sepa,
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