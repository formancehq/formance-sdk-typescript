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
        createdAt: new Date("2023-07-29T04:07:06.634Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.DisputeLost,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<id>",
    createdAt: new Date("2025-07-29T19:18:16.265Z"),
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
    status: PaymentStatus.Expired,
    type: PaymentType.Other,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |