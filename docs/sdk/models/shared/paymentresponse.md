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
        createdAt: new Date("2025-06-12T22:00:17.977Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.DisputeWon,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2023-11-12T11:10:45.405Z"),
    destinationAccountID: "<id>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.SepaDebit,
    sourceAccountID: "<id>",
    status: PaymentStatus.Cancelled,
    type: PaymentType.PayIn,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |