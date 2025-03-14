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
        createdAt: new Date("2025-04-09T11:43:44.154Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.DisputeWon,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-01-03T23:23:29.876Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.Diners,
    sourceAccountID: "<id>",
    status: PaymentStatus.DisputeLost,
    type: PaymentType.Other,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |