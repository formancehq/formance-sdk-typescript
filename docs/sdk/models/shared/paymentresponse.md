# PaymentResponse

## Example Usage

```typescript
import { PaymentResponse, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentResponse = {
  data: {
    adjustments: [
      {
        amount: BigInt("100"),
        createdAt: new Date("2023-03-02T14:21:31.742Z"),
        raw: {},
        reference: "<value>",
        status: PaymentStatus.Other,
      },
    ],
    amount: BigInt("100"),
    asset: "USD",
    connectorID: "<value>",
    createdAt: new Date("2022-06-25T18:59:30.281Z"),
    destinationAccountID: "<value>",
    id: "XXX",
    initialAmount: BigInt("100"),
    metadata: {
      "key": "<value>",
    },
    raw: {},
    reference: "<value>",
    scheme: PaymentScheme.Unknown,
    sourceAccountID: "<value>",
    status: PaymentStatus.Failed,
    type: PaymentType.Other,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Payment](../../../sdk/models/shared/payment.md) | :heavy_check_mark:                                      | N/A                                                     |